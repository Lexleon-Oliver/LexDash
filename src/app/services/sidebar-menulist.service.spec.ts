import { TestBed } from '@angular/core/testing';

import { SidebarMenulistService } from './sidebar-menulist.service';

describe('SidebarMenulistService', () => {
  let service: SidebarMenulistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarMenulistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
