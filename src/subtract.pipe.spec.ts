import { SubtractPipe } from './subtract.pipe';
import * as dayjs_ from 'dayjs';
const dayjs = dayjs_;

describe('SubtractPipe', () => {
  let pipe: SubtractPipe;

  beforeEach(() => pipe = new SubtractPipe());

  describe('#transform', () => {
    it('should throw when provided no arguments', () => {
      expect(() => (pipe.transform as any)(128)).toThrow(new Error('SubtractPipe: missing required arguments'));
    });

    it('should subtract two hours', () => {
      const result = pipe.transform(dayjs('2016-01-24 15:00:00'), '2', 'hours');
      expect(dayjs(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2016-01-24 13:00:00');
    });

    it('should subtract two days', () => {
      const result = pipe.transform(dayjs('2016-01-24 15:00:00'), '2', 'days');
      expect(dayjs(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2016-01-22 15:00:00');
    });

    it('should subtract two years', () => {
      const result = pipe.transform(dayjs('2016-01-24 15:00:00'), 2, 'years');
      expect(dayjs(result).format('YYYY-MM-DD HH:mm:ss')).toBe('2014-01-24 15:00:00');
    });
  });
});
