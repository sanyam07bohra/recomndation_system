from flask import Flask, request, jsonify
from flask_cors import CORS 
import json

app = Flask(__name__)
CORS(app) 

# --- 1. Load Data (Global Variables) ---
def load_data():
    """Loads all necessary data from the JSON files."""
    try:
        with open('colleges.json', 'r') as f:
            colleges = json.load(f)
        with open('courses.json', 'r') as f:
            courses = json.load(f)
        with open('careers.json', 'r') as f:
            careers = json.load(f)
        with open('timeline.json', 'r') as f:
            timeline_data = json.load(f)
        return colleges, courses, careers, timeline_data
    except FileNotFoundError as e:
        print(f"Error loading data: {e}")
        return [], [], [], {}

COLLEGES, COURSES, CAREERS, TIMELINE_DATA = load_data()

# --- 2. Static Configuration ---
QUIZ_KEYWORDS = {
    'Q1': {'A': ['logic', 'technical', 'data', 'innovation'], 'B': ['health', 'fieldwork', 'research', 'lab'], 'C': ['finance', 'management', 'market', 'analysis'], 'D': ['communication', 'culture', 'society', 'creativity']},
    'Q2': {'A': ['research', 'innovation', 'technical', 'design'], 'B': ['health', 'fieldwork', 'service', 'community'], 'C': ['corporate', 'finance', 'strategy', 'analysis'], 'D': ['government', 'policy', 'law', 'social-impact']},
    'Q3': {'A': ['research', 'innovation', 'learning'], 'B': ['teaching', 'mentoring', 'education', 'support'], 'C': ['corporate', 'management', 'leadership', 'business'], 'D': ['government', 'public-service', 'policy', 'vision']},
    'Q4': {'A': ['research', 'technical', 'lab', 'structured'], 'B': ['teaching', 'community', 'social', 'health'], 'C': ['corporate', 'management', 'execution', 'finance'], 'D': ['government', 'policy', 'regulation', 'planning']},
    'Q5': {'A': ['research', 'technical', 'data', 'innovation'], 'B': ['teaching', 'support', 'community', 'communication'], 'C': ['corporate', 'management', 'execution', 'strategy'], 'D': ['government', 'law', 'policy', 'regulation']},
    'Q6': {'A': ['research', 'innovation', 'technical'], 'B': ['teaching', 'education', 'support'], 'C': ['corporate', 'strategy', 'management'], 'D': ['government', 'policy', 'service']},
    'Q7': {'A': ['research', 'technical', 'data'], 'B': ['teaching', 'social', 'mentoring'], 'C': ['corporate', 'management', 'finance'], 'D': ['government', 'policy', 'law']},
    'Q8': {'A': ['research', 'technical', 'learning'], 'B': ['teaching', 'education', 'communication'], 'C': ['corporate', 'management', 'strategy'], 'D': ['government', 'policy', 'administration']},
    'Q9': {'A': ['research', 'technical', 'innovation'], 'B': ['teaching', 'mentoring', 'support'], 'C': ['corporate', 'management', 'execution'], 'D': ['government', 'policy', 'planning']},
    'Q10': {'A': ['research', 'technical', 'innovation'], 'B': ['teaching', 'education', 'support'], 'C': ['corporate', 'management', 'operations'], 'D': ['government', 'policy', 'regulation']},
    'Q11': {'A': ['technical', 'innovation', 'lab'], 'B': ['learning', 'communication', 'education'], 'C': ['finance', 'strategy', 'analysis'], 'D': ['policy', 'social-impact', 'culture']},
    'Q12': {'A': ['research', 'lab', 'technical'], 'B': ['social', 'community', 'health'], 'C': ['finance', 'corporate', 'management'], 'D': ['government', 'policy', 'administration']},
    'Q13': {'A': ['research', 'technical', 'innovation'], 'B': ['teaching', 'mentoring', 'service'], 'C': ['corporate', 'leadership', 'strategy'], 'D': ['government', 'public-service', 'policy']},
    'Q14': {'A': ['research', 'innovation', 'technical'], 'B': ['community', 'social', 'education'], 'C': ['finance', 'business', 'strategy'], 'D': ['policy', 'government', 'service']},
    'Q15': {'A': ['research', 'technical', 'analysis'], 'B': ['communication', 'support', 'teaching'], 'C': ['corporate', 'execution', 'management'], 'D': ['government', 'policy', 'learning']},
    'Q16': {'A': ['technical', 'innovation', 'research'], 'B': ['health', 'fieldwork', 'community'], 'C': ['finance', 'corporate', 'management'], 'D': ['government', 'policy', 'public-service']},
    'Q17': {'A': ['technical', 'logic', 'data', 'finance'], 'B': ['health', 'lab', 'research'], 'C': ['finance', 'analysis', 'market'], 'D': ['culture', 'society', 'communication']},
    'Q18': {'A': ['research', 'learning', 'technical'], 'B': ['teaching', 'community', 'support'], 'C': ['corporate', 'execution', 'strategy'], 'D': ['government', 'policy', 'planning']},
    'Q19': {'A': ['research', 'technical', 'analysis'], 'B': ['culture', 'society', 'communication'], 'C': ['finance', 'business', 'market'], 'D': ['government', 'law', 'policy']},
    'Q20': {'A': ['corporate', 'management', 'social'], 'B': ['research', 'technical', 'finance'], 'C': ['government', 'policy', 'execution'], 'D': ['leadership', 'strategy', 'corporate']},
}

# 2.2. Weighted Scoring Configuration
QUESTION_WEIGHTS = {
    'Q1': 3.0, 'Q2': 2.5, 'Q3': 1.5, 'Q4': 1.0, 'Q5': 1.5,
    'Q6': 1.0, 'Q7': 1.0, 'Q8': 2.0, 'Q9': 1.0, 'Q10': 1.0,
    'Q11': 1.0, 'Q12': 1.5, 'Q13': 1.5, 'Q14': 0.5, 'Q15': 1.0,
    'Q16': 0.8, 'Q17': 2.0, 'Q18': 1.0, 'Q19': 1.0, 'Q20': 0.5
}
UNIVERSAL_CAREER_TITLES = [
    'Software Engineer', 'Data Scientist', 'Research Scientist', 
    'Architect', 'Analyst', 'Physicist', 'Chemist', 'Dietician', 'Physiotherapist',
    'Network Engineer', 'Pharmacist', 'Microbiologist'
]


# --- 3. Recommendation Logic (The Core Engine) ---
@app.route('/api/recommend', methods=['POST'])
def get_recommendations():
    """Calculates scores, filters careers by stream, and returns the top 5 recommendations."""
    if not all([COLLEGES, COURSES, CAREERS, TIMELINE_DATA]):
        return jsonify({'error': 'Data files could not be loaded on the server.'}), 500

    data = request.get_json()
    answers = data.get('answers', {})
    
    if not answers or len(answers) < 20:
        return jsonify({'error': 'Please provide answers for all 20 questions.'}), 400

    # 3.1. Tally Keywords (Weighted Scoring)
    keyword_scores = {}
    for q_id, answer in answers.items():
        if q_id in QUIZ_KEYWORDS and answer in QUIZ_KEYWORDS[q_id]:
            weight = QUESTION_WEIGHTS.get(q_id, 1.0)
            for keyword in QUIZ_KEYWORDS[q_id][answer]:
                keyword_scores[keyword] = keyword_scores.get(keyword, 0) + (1 * weight)

    # Define stream filter and key based on Q1
    q1_answer = answers.get('Q1')
    initial_tags = QUIZ_KEYWORDS.get('Q1', {}).get(q1_answer, [])
    
    stream_filter = []
    if 'health' in initial_tags or 'lab' in initial_tags:
        stream_filter = ['Healthcare', 'Science']
        timeline_key = 'science_biology'
    elif 'technical' in initial_tags or 'logic' in initial_tags:
        stream_filter = ['Engineering', 'Science']
        timeline_key = 'science_pcm'
    elif 'finance' in initial_tags or 'management' in initial_tags:
        stream_filter = ['Engineering', 'Healthcare', 'Science'] 
        timeline_key = 'commerce'
    elif 'communication' in initial_tags or 'society' in initial_tags:
        stream_filter = ['Engineering', 'Healthcare', 'Science']
        timeline_key = 'humanities'
    else:
        timeline_key = None

    # 3.2. Score Careers (LOOSENED FILTER + OPPORTUNITY BOOST)
    career_scores = {}
    
    for career in CAREERS:
        career_tags = set(career.get('tags', []))
        career_title = career['title']
        
        course_id = career.get('required_courses', [''])[0]
        course_category = next((c['category'] for c in COURSES if c['id'] == course_id), 'Other')

        is_primary_match = course_category in stream_filter
        is_universal = career_title in UNIVERSAL_CAREER_TITLES
        
        if not is_primary_match and not is_universal:
            continue 

        # --- Scoring ---
        current_score = 0
        for keyword, score in keyword_scores.items():
            if keyword in career_tags:
                current_score += score
        
        opportunity_boost = career.get('opportunity_score', 0) * 0.05 
        
        career_scores[career_title] = current_score + opportunity_boost

    # 3.3. Get Top Recommendations (Top 5)
    sorted_careers = sorted(career_scores.items(), key=lambda item: item[1], reverse=True)
    top_careers = sorted_careers[:5] # <-- Changed to Top 5
    
    # 3.4. Build Final Structured Output (JSON Response)
    recommendations = []
    for title, score in top_careers:
        career_details = next((c for c in CAREERS if c['title'] == title), None)
        if not career_details:
            continue

        course_id = career_details.get('required_courses', [''])[0]
        course_info = next((c for c in COURSES if c['id'] == course_id), {})
        
        # Find colleges
        college_matches = []
        if course_info.get('name'):
            course_name_clean = course_info['name'].split('(')[0].strip()
            for college in COLLEGES:
                for program in college.get('programs_offered', []):
                    program_name_clean = program['name'].split('(')[0].strip()
                    if course_name_clean.startswith(program_name_clean) or program_name_clean.startswith(course_name_clean):
                        college_matches.append({
                            'name': college['name'],
                            'location': college['location'],
                            'ranking': college['ranking']['national']
                        })
                        break 
        
        recommendations.append({
            'career_title': title,
            'match_score': round(score, 1), 
            'course_name': course_info.get('name'),
            'duration': course_info.get('duration'),
            'avg_salary': career_details.get('average_salary'),
            'future_scope': career_details.get('future_scope'),
            'skills_needed': career_details.get('skills_needed'),
            'top_colleges': sorted(college_matches, key=lambda x: x.get('ranking') if str(x.get('ranking')).isdigit() else float('inf'))[:3]
        })
    
    stream_info = TIMELINE_DATA.get(timeline_key, {})

    return jsonify({
        'recommendations': recommendations,
        'stream_context': {
            'title': stream_info.get('title', 'Career Stream Context'),
            'introduction': stream_info.get('introduction', 'Detailed stream context not found.')
        }
    })


if __name__ == '__main__':
    app.run(debug=True, port=5000)
