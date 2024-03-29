import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class ThemeService {
    public theme: BehaviorSubject<string> = new BehaviorSubject<string>("theme-blue");


    selectTheme(value: string) {
        this.theme.next(value);
    }
}