import 'reflect-metadata';
import { AddPipe } from './add.pipe';
import * as dayjs from 'dayjs';
const dayjsConstructor = dayjs;

describe('AddPipe', () => {
  let pipe: AddPipe;

  beforeEach(() => pipe = new AddPipe());

  describe('#transform', () => {
    it('should throw when provided no arguments', () => {
      expect(() => (pipe.transform as any)(128)).toThrow(new Error('AddPipe: missing required arguments'));
    });

    it('should add two hours', () => {
      const result = pipe.transform(dayjsConstructor('2018-01-20 10:00:00'), '2', 'hours');
      expect(dayjsConstructor(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2018-01-20 12:00:00');
    });

    it('should add two days', () => {
      const result = pipe.transform(dayjsConstructor('2018-01-20 15:00:00'), '2', 'days');
      expect(dayjsConstructor(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2018-01-22 15:00:00');
    });

    it('should add two years', () => {
      const result = pipe.transform(dayjsConstructor('2018-01-20 15:00:00'), 2, 'years');
      expect(dayjsConstructor(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2020-01-20 15:00:00');
    });
  });
});
