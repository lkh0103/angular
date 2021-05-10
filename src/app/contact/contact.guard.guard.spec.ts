import { TestBed } from '@angular/core/testing';

import { Contact.GuardGuard } from './contact.guard.guard';

describe('Contact.GuardGuard', () => {
  let guard: Contact.GuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Contact.GuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
