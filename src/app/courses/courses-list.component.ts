import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component ({
    selector : 'app-course-list',
    templateUrl : './courses-list.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'DSE-1634',
                duration: 120,
                rating: 4.5,
                releaseDate: '2020-08-10'
            },
            {
                id: 2,
                name: 'Angular: Http',
                imageUrl: '/assets/images/http.png',
                price: 49.99,
                code: 'EDC-4673',
                duration: 80,
                rating: 4.0,
                releaseDate: '2020-08-15'
            }
        ];
    }
    
}