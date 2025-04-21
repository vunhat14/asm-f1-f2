import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Website bán đồ thể thao',
      description: 'Một trang web thương mại điện tử hoàn toàn đáp ứng được xây dựng bằng FIGMA, JAVACRIPT và HTML/CSS, có tính năng xác thực người dùng, danh mục sản phẩm và chức năng thanh toán.',
      longDescription: `
        Nền tảng thương mại điện tử này cung cấp trải nghiệm mua sắm hoàn chỉnh từ duyệt sản phẩm đến thanh toán.

Các tính năng chính bao gồm:
- Xác thực người dùng và quản lý hồ sơ
- Duyệt sản phẩm bằng bộ lọc và tìm kiếm
- Chức năng giỏ hàng và danh sách mong muốn
- Quy trình thanh toán an toàn với nhiều tùy chọn thanh toán
- Lịch sử đơn hàng và theo dõi
- Bảng điều khiển quản trị để quản lý sản phẩm và đơn hàng

        Ứng dụng sử dụng HTML cho giao diện người dùng, với quản lý trạng thái thông qua MySQL. Phần phụ trợ được xây dựng bằng Node.js và Express, sử dụng MongoDB để lưu trữ dữ liệu. Ứng dụng hoàn toàn đáp ứng và được tối ưu hóa cho mọi thiết bị.`,
      imageUrl: '/images/project1.1.PNG',
      technologies: ['FIGMA', 'JAVASCRIPT', 'HTML/CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://www.figma.com/design/Z2tcVtK0qjudJuqHISe6kG/ASM-GD1-UI-UX?node-id=0-1&t=cbbiXqi4MXi1oEHs-1',
      featured: true,
      category: 'Web Development',
      date: 'Tháng 1 năm 2023'
    },
    {
      id: 2,
      title: 'DEMO ESHOPER',
      description: 'Bản demo trang website bán các mặt hàng thời trang với tính năng xác thực người dùng, giỏ hàng và thanh toán.',
      longDescription: `
        Nền tảng thương mại điện tử này cung cấp trải nghiệm mua sắm hoàn chỉnh từ duyệt sản phẩm đến thanh toán.

Các tính năng chính bao gồm:
- Xác thực người dùng và quản lý hồ sơ
- Duyệt sản phẩm bằng bộ lọc và tìm kiếm
- Chức năng giỏ hàng và danh sách mong muốn
- Quy trình thanh toán an toàn với nhiều tùy chọn thanh toán
- Lịch sử đơn hàng và theo dõi
- Bảng điều khiển quản trị để quản lý sản phẩm và đơn hàng

        Ứng dụng sử dụng HTML cho giao diện người dùng, với quản lý trạng thái thông qua MySQL. Phần phụ trợ được xây dựng bằng Node.js và Express, sử dụng MongoDB để lưu trữ dữ liệu. Ứng dụng hoàn toàn đáp ứng và được tối ưu hóa cho mọi thiết bị.
      `,
      imageUrl: '/images/project2.PNG',
      technologies: ['Angular', 'Express', 'PostgreSQL', 'JAVACRIPT', 'Angular Material'],
      githubUrl: 'https://github.com/vunhat14/ESHOPER.git',
      liveUrl: 'https://example.com',
      featured: true,
      category: 'DEMO WEBSITE',
      date: 'Tháng 12 năm 2024'
    },
    {
      id: 3,
      title: 'Website bán đồ thể thao',
      description: 'Một trang web thương mại điện tử hoàn toàn đáp ứng được xây dựng bằng FIGMA, JAVACRIPT và HTML/CSS, có tính năng xác thực người dùng, danh mục sản phẩm và chức năng thanh toán.',
      longDescription: `
        Nền tảng thương mại điện tử này cung cấp trải nghiệm mua sắm hoàn chỉnh từ duyệt sản phẩm đến thanh toán.

Các tính năng chính bao gồm:
- Xác thực người dùng và quản lý hồ sơ
- Duyệt sản phẩm bằng bộ lọc và tìm kiếm
- Chức năng giỏ hàng và danh sách mong muốn
- Quy trình thanh toán an toàn với nhiều tùy chọn thanh toán
- Lịch sử đơn hàng và theo dõi
- Bảng điều khiển quản trị để quản lý sản phẩm và đơn hàng

        Ứng dụng sử dụng HTML cho giao diện người dùng, với quản lý trạng thái thông qua MySQL. Phần phụ trợ được xây dựng bằng Node.js và Express, sử dụng MongoDB để lưu trữ dữ liệu. Ứng dụng hoàn toàn đáp ứng và được tối ưu hóa cho mọi thiết bị.`,
      imageUrl: '/images/project3.PNG',
      technologies: ['FIGMA', 'JAVASCRIPT', 'HTML/CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://www.figma.com/design/Z2tcVtK0qjudJuqHISe6kG/ASM-GD1-UI-UX?node-id=0-1&t=cbbiXqi4MXi1oEHs-1',
      featured: true,
      category: 'Web Development',
      date: 'Tháng 1 năm 2023'
    },
    {
      id: 4,
      title: 'Website bán đồ thể thao',
      description: 'Một trang web thương mại điện tử hoàn toàn đáp ứng được xây dựng bằng FIGMA, JAVACRIPT và HTML/CSS, có tính năng xác thực người dùng, danh mục sản phẩm và chức năng thanh toán.',
      longDescription: `
        Nền tảng thương mại điện tử này cung cấp trải nghiệm mua sắm hoàn chỉnh từ duyệt sản phẩm đến thanh toán.

Các tính năng chính bao gồm:
- Xác thực người dùng và quản lý hồ sơ
- Duyệt sản phẩm bằng bộ lọc và tìm kiếm
- Chức năng giỏ hàng và danh sách mong muốn
- Quy trình thanh toán an toàn với nhiều tùy chọn thanh toán
- Lịch sử đơn hàng và theo dõi
- Bảng điều khiển quản trị để quản lý sản phẩm và đơn hàng

        Ứng dụng sử dụng HTML cho giao diện người dùng, với quản lý trạng thái thông qua MySQL. Phần phụ trợ được xây dựng bằng Node.js và Express, sử dụng MongoDB để lưu trữ dữ liệu. Ứng dụng hoàn toàn đáp ứng và được tối ưu hóa cho mọi thiết bị.`,
      imageUrl: '/images/project1.1.PNG',
      technologies: ['FIGMA', 'JAVASCRIPT', 'HTML/CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://www.figma.com/design/Z2tcVtK0qjudJuqHISe6kG/ASM-GD1-UI-UX?node-id=0-1&t=cbbiXqi4MXi1oEHs-1',
      featured: true,
      category: 'Web Development',
      date: 'Tháng 1 năm 2023'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'A fitness tracking application that allows users to monitor workouts, set goals, and track progress.',
      longDescription: `
        This fitness tracker helps users maintain their health and fitness routine by tracking workouts and providing insights into their progress.

        Key features include:
        - Workout logging and tracking
        - Goal setting and progress monitoring
        - Exercise library with instructions
        - Customizable workout plans
        - Nutrition tracking
        - Progress visualization with charts
        - Social sharing and challenges

        The application is built with Angular for the frontend and Firebase for backend services, including authentication and real-time database.
      `,
      imageUrl: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'Firebase', 'Chart.js', 'PWA'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Health & Fitness',
      date: 'July 2022'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing skills, projects, and professional experience.',
      longDescription: `
        This portfolio website serves as a showcase for my work, skills, and professional experience, designed to highlight my capabilities as a developer.

        Key features include:
        - Modern and responsive design
        - Project showcase with detailed descriptions
        - Skills and expertise sections
        - Professional timeline and experience
        - Contact form for inquiries
        - Blog section for sharing knowledge
        - Optimized for performance and SEO

        The website is built with Angular and uses Bootstrap for responsive design. It's deployed as a static site with modern optimization techniques for maximum performance.
      `,
      imageUrl: 'https://via.placeholder.com/600x400',
      technologies: ['Angular', 'Bootstrap', 'SCSS', 'Firebase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      category: 'Personal Website',
      date: 'December 2023'
    }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    const project = this.projects.find(p => p.id === id);
    return of(project);
  }

  getFeaturedProjects(): Observable<Project[]> {
    return of(this.projects.filter(p => p.featured));
  }
}
