#!/usr/bin/env python3
import unittest
from server import app


class TestFunctions(unittest.TestCase):

    def test_home(self):
        """ Test that the flask server is running and reachable"""
        response = app.test_client().get('/')
        self.assertIn('Congratulations!', str(response.data))
        self.assertEqual(response.status_code, 200)

    def test_get_raw(self):
        """ Test Raw Data"""
        response = app.test_client().get('/get_raw', content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_get_counts(self):
        """ Test Drug Count"""
        response = app.test_client().get('/get_counts', content_type='application/json')
        self.assertEqual(response.status_code, 200)

    def test_404(self):
        """ Test Drug Count"""
        response = app.test_client().get('/get_count', content_type='application/json')
        self.assertEqual(response.status_code, 404)


if __name__ == '__main__':
      unittest.main()
