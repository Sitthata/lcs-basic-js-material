import { describe, it, expect } from 'bun:test';

import { convertTemperature } from '../basic-js/function/practice/temperature'

describe('Temperature Conversion Tests', () => {
    it('should convert 25C to 77F', () => {
        const result = convertTemperature(25, 'C', 'F');
        expect(result).toBe(77.00)
    })

    it('should convert Fahrenheit to Kelvin correctly', () => {
        const result = convertTemperature(32, 'F', 'K');
        expect(result).toBe(273.15);
    });

    it('should convert Kelvin to Celsius correctly', () => {
        const result = convertTemperature(300, 'K', 'C');
        expect(result).toBe(26.85);
    });

    it('should convert Celsius to Kelvin correctly', () => {
        const result = convertTemperature(0, 'C', 'K');
        expect(result).toBe(273.15);
    });

    it('should convert Fahrenheit to Celsius correctly', () => {
        const result = convertTemperature(212, 'F', 'C');
        expect(result).toBe(100.00);
    });

    it('should convert Kelvin to Fahrenheit correctly', () => {
        const result = convertTemperature(0, 'K', 'F');
        expect(result).toBe(-459.67);
    });

    it('should return the same temperature if input and output units are the same', () => {
        const result = convertTemperature(100, 'C', 'C');
        expect(result).toBe(100.00);
    });

    it('should handle negative temperatures correctly', () => {
        const result = convertTemperature(-40, 'C', 'F');
        expect(result).toBe(-40.00);
    });
})