const calculateCategoryScore = (category, content) => {
  const weights = {
    contentQuality: 0.30,
    experience: 0.25,
    skills: 0.20,
    education: 0.15,
    format: 0.10
  };

  const metrics = {
    contentQuality: {
      hasQuantifiableResults: /increased|decreased|improved|reduced|achieved|grew|managed|\d+%|\$\d+/i,
      hasActionVerbs: /implemented|developed|led|created|designed|managed|coordinated/i,
      hasConciseStatements: (str) => str.split('.').every(s => s.trim().split(' ').length < 20)
    },
    experience: {
      hasDates: /\d{4}(-\d{4}|(-\d{2})?( to |-|–)present)/i,
      hasCompanyTitles: /engineer|developer|manager|director|specialist|analyst/i,
      hasResponsibilities: /responsible for|managed|led|handled|oversaw/i
    },
    skills: {
      hasTechnicalSkills: /javascript|python|java|react|node|sql|aws|docker/i,
      hasSoftSkills: /leadership|communication|teamwork|problem.solving|analytical/i,
      hasToolsFrameworks: /git|jira|agile|scrum|jenkins|kubernetes/i
    }
  };

  const scores = {};
  for (const [metric, tests] of Object.entries(metrics)) {
    let score = 0;
    for (const test of Object.values(tests)) {
      if (test instanceof RegExp ? test.test(content) : test(content)) {
        score += 1;
      }
    }
    scores[metric] = (score / Object.keys(tests).length) * 100;
  }

  return scores;
};

const normalizeScore = (score) => {
  return Math.min(Math.max(Math.round(score), 0), 100);
};

module.exports = {
  calculateCategoryScore,
  normalizeScore
}; 