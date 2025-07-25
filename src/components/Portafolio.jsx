import React from 'react';
import corporativoImg from '../assets/corporativo.png';
import inventarioImg from '../assets/inventarios.png';
import aplicacionesImg from '../assets/aplicaciones.jpg';
import dashboardAdminoImg from '../assets/dashboardAdmin.png';
import reservasImg from '../assets/reservas.png';
import blogImg from '../assets/blog.png';

export const Portafolio = () => {
  return (
    <div className="container my-5 py-5">
      <h2 className="display-5 fw-bold text-center mb-4 animate__animated animate__fadeIn">
        Portafolio de Proyectos <span className="text-primary">Innovadores</span>
      </h2>
      <p className="text-center text-muted mb-5 animate__animated animate__fadeIn">
        Una selección de proyectos que reflejan mi compromiso con la calidad, eficiencia e innovación tecnológica.
      </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 animate__animated animate__fadeInUp">
        {/* Proyecto 1 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src={corporativoImg} className="card-img-top" alt="Proyecto Web Corporativo" />
            <div className="card-body">
              <h5 className="card-title text-primary">Proyecto Web Corporativo</h5>
              <p className="card-text text-muted">
                Desarrollo integral de una plataforma e-commerce con funcionalidades avanzadas y optimización de rendimiento.
              </p>
            </div>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src={inventarioImg} className="card-img-top" alt="Sistema de Gestión Interna" />
            <div className="card-body">
              <h5 className="card-title text-primary">Sistema de Gestión Interna</h5>
              <p className="card-text text-muted">
                Implementación de un sistema de administración de inventario con integración de base de datos en tiempo real.
              </p>
            </div>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src={aplicacionesImg} className="card-img-top" alt="Aplicación Móvil Híbrida" />
            <div className="card-body">
              <h5 className="card-title text-primary">Aplicación Móvil Híbrida</h5>
              <p className="card-text text-muted">
                Creación de una aplicación móvil para servicios a domicilio, disponible en iOS y Android.
              </p>
            </div>
          </div>
        </div>

        {/* Proyecto 4 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src={dashboardAdminoImg} className="card-img-top" alt="Dashboard Administrativo" />
            <div className="card-body">
              <h5 className="card-title text-primary">Dashboard Administrativo</h5>
              <p className="card-text text-muted">
                Plataforma interactiva para análisis de KPIs empresariales con gráficos dinámicos y filtros personalizados.
              </p>
            </div>
          </div>
        </div>

        {/* Proyecto 5 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src={reservasImg} className="card-img-top" alt="Sistema de Reservas" />
            <div className="card-body">
              <h5 className="card-title text-primary">Sistema de Reservas</h5>
              <p className="card-text text-muted">
                Aplicación web para gestión de turnos y citas, con notificaciones automáticas y panel de administración.
              </p>
            </div>
          </div>
        </div>

        {/* Proyecto 6 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src={blogImg} className="card-img-top" alt="Blog Tecnológico" />
            <div className="card-body">
              <h5 className="card-title text-primary">Blog Tecnológico</h5>
              <p className="card-text text-muted">
                Desarrollo de un blog optimizado con SEO, CMS personalizado y secciones dinámicas de contenido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
