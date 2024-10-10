// src/rateMovie.test.js

import { describe, it, expect } from 'bun:test';
import { rateMovie } from '../basic-js/function/practice/movie-rating';

describe('rateMovie Function Tests', () => {
    it('should correctly convert [5, 4, 4, 5, 5] to average "4.60" and category "Excellent"', () => {
        const result = rateMovie([5, 4, 4, 5, 5]);
        expect(result).toEqual({ average: "4.60", category: "Excellent" });
    });

    it('should correctly convert [3, 3, 4, 2, 3] to average "3.00" and category "Average"', () => {
        const result = rateMovie([3, 3, 4, 2, 3]);
        expect(result).toEqual({ average: "3.00", category: "Average" });
    });

    it('should correctly categorize average "4.50" as "Excellent"', () => {
        const result = rateMovie([5, 4, 5, 5]);
        expect(result).toEqual({ average: "4.75", category: "Excellent" });
    });

    it('should correctly categorize average "3.75" as "Good"', () => {
        const result = rateMovie([4, 3, 4, 4, 4]);
        expect(result).toEqual({ average: "3.80", category: "Good" });
    });

    it('should correctly categorize average "2.75" as "Average"', () => {
        const result = rateMovie([3, 2, 3, 3, 3]);
        expect(result).toEqual({ average: "2.80", category: "Average" });
    });

    it('should correctly categorize average "1.75" as "Poor"', () => {
        const result = rateMovie([2, 1, 2, 2]);
        expect(result).toEqual({ average: "1.75", category: "Poor" });
    });

    it('should correctly categorize average "1.00" as "Terrible"', () => {
        const result = rateMovie([1, 1, 1]);
        expect(result).toEqual({ average: "1.00", category: "Terrible" });
    });

    it('should return average "3.50" and category "Good" for [3, 4]', () => {
        const result = rateMovie([3, 4]);
        expect(result).toEqual({ average: "3.50", category: "Good" });
    });

    it('should return average "4.00" and category "Good" for [4, 4, 4, 4]', () => {
        const result = rateMovie([4, 4, 4, 4]);
        expect(result).toEqual({ average: "4.00", category: "Good" });
    });

    it('should handle single rating correctly', () => {
        const result = rateMovie([5]);
        expect(result).toEqual({ average: "5.00", category: "Excellent" });
    });

    it('should throw an error if ratings array is empty', () => {
        expect(() => rateMovie([])).toThrow('Ratings array cannot be empty.');
    });

    it('should throw an error if ratings is not an array', () => {
        expect(() => rateMovie("invalid")).toThrow('Ratings must be an array of numbers.');
    });

    it('should throw an error if any rating is not a number', () => {
        expect(() => rateMovie([3, "4", 5])).toThrow('All ratings must be numbers.');
    });

    it('should throw an error if any rating is below 1', () => {
        expect(() => rateMovie([0, 3, 4])).toThrow('Ratings must be between 1 and 5.');
    });

    it('should throw an error if any rating is above 5', () => {
        expect(() => rateMovie([3, 6, 4])).toThrow('Ratings must be between 1 and 5.');
    });
});
