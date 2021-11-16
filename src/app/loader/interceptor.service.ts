import { LoaderService } from './loader.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  constructor(public LoaderService: LoaderService) {}
}
