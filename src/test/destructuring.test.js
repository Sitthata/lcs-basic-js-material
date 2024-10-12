import { describe, it, expect } from 'bun:test';
import {
    getUserName,
    getContactInfo,
    getHomeAddress,
    getSecondTheme,
    getSecondPostTitle,
    getFormattedProfile
} from '../advance-js/destructuring/practice/destructuring-exercise'

describe('Destructuring Exercise Tests', () => {
    it('getUserName should return the correct first and last name', () => {
        const result = getUserName();
        expect(result).toEqual({ first: 'John', last: 'Doe' });
    });

    it('getContactInfo should return the correct email and phone', () => {
        const result = getContactInfo();
        expect(result).toEqual({ email: 'john.doe@example.com', phone: '555-1234' });
    });

    it('getHomeAddress should return the correct city and ZIP for home address', () => {
        const result = getHomeAddress();
        expect(result).toEqual({ city: 'Anytown', zip: '12345' });
    });

    it('getSecondTheme should return the second preferred theme', () => {
        const result = getSecondTheme();
        expect(result).toBe('solarized');
    });

    it('getSecondPostTitle should return the title of the second post', () => {
        const result = getSecondPostTitle();
        expect(result).toBe('Destructuring in JS');
    });

    it('getFormattedProfile should return the complete formatted profile', () => {
        const result = getFormattedProfile();
        expect(result).toEqual({
            userId: 101,
            name: 'John Doe',
            contact: { email: 'john.doe@example.com', phone: '555-1234' },
            homeAddress: { city: 'Anytown', zip: '12345' },
            notifications: { email: true, sms: false },
            preferredThemes: ['dark', 'solarized'],
            posts: ['(1) Hello World', '(2) Destructuring in JS']
        });
    });
});
