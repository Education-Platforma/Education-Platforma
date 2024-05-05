import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ResponseModel } from '../../models/response-model';
import { Coupon } from '../../models/coupon';
import { Category } from '../../models/category';
import { Course } from '../../models/course';
import { LessonModel } from '../../models/lesson-model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl = 'https://edu-api.tohirjon.uz/api/';
  constructor(private http: HttpClient) {}

  CreateCategory(name: string): Observable<ResponseModel> {
    return this.http
      .post<ResponseModel>(this.apiUrl + 'Category', { name: name })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  CreateCoupon(
    couponCode: string,
    discount: number
  ): Observable<ResponseModel> {
    return this.http
      .post<ResponseModel>(this.apiUrl + 'Coupon', {
        couponCode: couponCode,
        discount: discount,
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  GetAllCoupons(): Observable<any> {
    return this.http.get<Coupon>(this.apiUrl + 'Coupon/all').pipe(
      map((response) => {
        return response;
      })
    );
  }
  GetAllCategorys(): Observable<any> {
    return this.http.get<Category>(this.apiUrl + 'Category/all').pipe(
      map((response) => {
        return response;
      })
    );
  }



CreateCourse(data: Course): Observable<ResponseModel> {
  console.log(data);
  console.log('keldi service ga');
  return this.http
    .post<ResponseModel>(this.apiUrl + 'Course/CreateCourse', data)
    .pipe(
      map((response) => {
        return response;
      })
    );
}


CreateLesson(data: LessonModel): Observable<any> {
    return this.http.post(this.apiUrl + 'Lesson/CreateLesson', data).pipe(
        map((response) => {
          return response;
        })
    )
}












}

