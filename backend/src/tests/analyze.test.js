const request = require('supertest');
const app = require('../app');
const { Analysis } = require('../models/analysis');
const path = require('path');

describe('Resume Analysis API', () => {
  beforeEach(async () => {
    await Analysis.destroy({ where: {} }); // Clear database
  });

  describe('POST /api/analyze', () => {
    it('should analyze PDF resume successfully', async () => {
      const response = await request(app)
        .post('/api/analyze')
        .attach('resume', path.join(__dirname, 'fixtures/sample-resume.pdf'));

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('score');
      expect(response.body).toHaveProperty('categories');
      expect(response.body).toHaveProperty('suggestions');
    });

    it('should reject non-PDF files', async () => {
      const response = await request(app)
        .post('/api/analyze')
        .attach('resume', path.join(__dirname, 'fixtures/sample-resume.doc'));

      expect(response.status).toBe(400);
      expect(response.body.message).toMatch(/pdf/i);
    });

    it('should handle missing files', async () => {
      const response = await request(app)
        .post('/api/analyze');

      expect(response.status).toBe(400);
      expect(response.body.message).toMatch(/no file/i);
    });
  });

  describe('GET /api/history', () => {
    it('should return analysis history', async () => {
      // Create sample analysis
      await Analysis.create({
        score: 75,
        categories: [{ name: 'Experience', score: 80 }],
        suggestions: ['Add more details'],
        resumeText: 'Sample resume'
      });

      const response = await request(app)
        .get('/api/history');

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
}); 