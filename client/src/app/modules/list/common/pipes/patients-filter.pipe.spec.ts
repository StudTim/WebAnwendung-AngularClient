import { PatientsFilterPipe } from './patients-filter.pipe';

describe('PatientsFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new PatientsFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
