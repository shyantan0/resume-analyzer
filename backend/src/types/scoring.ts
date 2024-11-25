interface ScoringCriteria {
  contentQuality: {
    weight: 0.30,
    subCategories: {
      clarity: { weight: 0.4 },
      relevance: { weight: 0.3 },
      achievements: { weight: 0.3 }
    }
  },
  experience: {
    weight: 0.25,
    subCategories: {
      roleRelevance: { weight: 0.4 },
      progression: { weight: 0.3 },
      impact: { weight: 0.3 }
    }
  },
  skills: {
    weight: 0.20,
    subCategories: {
      technical: { weight: 0.4 },
      soft: { weight: 0.3 },
      domain: { weight: 0.3 }
    }
  },
  education: {
    weight: 0.15,
    subCategories: {
      degrees: { weight: 0.5 },
      certifications: { weight: 0.3 },
      continuingEd: { weight: 0.2 }
    }
  },
  format: {
    weight: 0.10,
    subCategories: {
      layout: { weight: 0.4 },
      consistency: { weight: 0.3 },
      atsCompatibility: { weight: 0.3 }
    }
  }
} 