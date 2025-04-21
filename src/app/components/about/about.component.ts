import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  // Timeline entries
  timeline = [
    {
      year: '2023',
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      description: 'Dẫn dắt quá trình phát triển nhiều ứng dụng web có tác động cao bằng Angular. Hợp tác với các nhà thiết kế UX và nhà phát triển backend để mang lại trải nghiệm người dùng liền mạch.'
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'Web Agency',
      description: 'Phát triển các trang web có khả năng phản hồi và dễ tiếp cận cho khách hàng trên nhiều ngành công nghiệp khác nhau. Chuyên về phát triển Angular và triển khai UI/UX.'
    },
    {
      year: '2019',
      title: 'Junior Developer',
      company: 'Startup',
      description: 'Bắt đầu hành trình nghề nghiệp của mình với tư cách là một lập trình viên cơ sở, làm việc trên nhiều dự án front-end và tìm hiểu các phương pháp phát triển web hiện đại.'
    }
  ];
}
