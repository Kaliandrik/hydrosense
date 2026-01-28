import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Dashboard = () => {
  const tools = [
    {
      title: "Cálculo de ETo",
      desc: "Evapotranspiração de referência (Penman-Monteith).",
      icon: "🌦️",
      path: "/eto",
      color: "#3b82f6"
    },
    {
      title: "Cálculo de ETcc",
      desc: "Evapotranspiração da cultura sob condições padrão.",
      icon: "🌱",
      path: "/etcc",
      color: "#10b981"
    },
    {
      title: "Coeficiente Kc",
      desc: "Gerenciamento de coeficientes de cultura por estágio.",
      icon: "📊",
      path: "/ko",
      color: "#f59e0b"
    }
  ];

  return (
    <Layout>
      {/* Área Principal - MANTIDO IGUAL */}
      <div style={{
        flex: 1,
        padding: '3rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Header com LOGO CENTRALIZADO */}
        <header style={{ 
          marginBottom: '3rem',
          textAlign: 'center',
          width: '100%'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {/* LOGO GRANDE CENTRALIZADA */}
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '24px',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              border: '3px solid #e5e7eb',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              marginBottom: '1rem'
            }}>
              <img 
                src="/Imagens/logohydro.jpeg" 
                alt="HydroSense Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '15px'
                }}
              />
            </div>
            
            {/* Título e subtítulo centralizados */}
            <div>
              <h1 style={{
                fontSize: '2.5rem',
                color: '#1e293b',
                margin: '0 0 0.5rem 0',
                fontWeight: '700'
              }}>
                Bem-vindo ao HydroSense
              </h1>
              <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                margin: 0,
                maxWidth: '600px'
              }}>
                Sistema avançado para cálculo e gestão hídrica agrícola
              </p>
            </div>
          </div>
        </header>

        {/* Cards de Status */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem',
          width: '100%',
          maxWidth: '800px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: '#dbeafe',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3b82f6',
                fontSize: '1.25rem'
              }}>
                🔧
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Ferramentas</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: '4px 0 0 0' }}>{tools.length}</p>
              </div>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: '#dcfce7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981',
                fontSize: '1.25rem'
              }}>
                📈
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Precisão</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: '4px 0 0 0' }}>Alta</p>
              </div>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '16px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                backgroundColor: '#fef3c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b',
                fontSize: '1.25rem'
              }}>
                ✅
              </div>
              <div>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>Status</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', margin: '4px 0 0 0' }}>Ativo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Ferramentas - CÓDIGO ORIGINAL QUE NÃO GRUDA */}
        <div style={{
          width: '100%',
          maxWidth: '1000px'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            color: '#1e293b',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Ferramentas de Cálculo
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {tools.map((tool, index) => (
              <Link
                to={tool.path}
                key={index}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '16px',
                  textDecoration: 'none',
                  color: 'inherit',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = tool.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {/* Efeito de brilho no hover */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: tool.color,
                  opacity: 0.3
                }} />
                
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  marginBottom: '1.5rem',
                  backgroundColor: tool.color,
                  color: 'white'
                }}>
                  {tool.icon}
                </div>
                
                <h3 style={{
                  fontSize: '1.4rem',
                  color: '#1e293b',
                  marginBottom: '0.75rem',
                  fontWeight: '700'
                }}>
                  {tool.title}
                </h3>
                
                <p style={{
                  color: '#64748b',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  flexGrow: 1
                }}>
                  {tool.desc}
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{
                    color: '#10b981',
                    fontWeight: '600',
                    fontSize: '0.95rem'
                  }}>
                    Calcular agora →
                  </span>
                  <span style={{
                    color: tool.color,
                    fontSize: '1.25rem',
                    opacity: 0.7
                  }}>
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer style={{
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid #e5e7eb',
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '0.875rem',
          width: '100%'
        }}>
          <p style={{ margin: 0 }}>
            © 2026 HydroSense - Tecnologia para Irrigação de Precisão
          </p>
          <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', color: '#9ca3af' }}>
            Sistema especializado em cálculos hídricos agrícolas
          </p>
        </footer>
      </div>

      {/* ESTILOS RESPONSIVOS APENAS PARA MOBILE */}
      <style>
        {`
          /* Apenas para telas menores que 768px (mobile) */
          @media (max-width: 768px) {
            /* Ajuste do padding principal */
            .main-content {
              padding: 1.5rem !important;
            }
            
            /* Título menor no mobile */
            h1 {
              font-size: 2rem !important;
            }
            
            /* Subtítulo menor */
            header p {
              font-size: 1rem !important;
              padding: 0 1rem;
            }
            
            /* Logo menor no mobile */
            .logo-container {
              width: 100px !important;
              height: 100px !important;
            }
            
            /* Cards de status em 1 coluna no mobile muito pequeno */
            @media (max-width: 480px) {
              .stats-grid {
                grid-template-columns: 1fr !important;
              }
            }
            
            /* Garantir que os cards de ferramentas não fiquem muito largos */
            .tools-grid {
              gap: 1rem !important;
            }
            
            .tool-card {
              min-height: auto !important;
            }
          }
          
          /* Ajuste para tablets (768px - 1024px) */
          @media (min-width: 769px) and (max-width: 1024px) {
            /* Mantém o layout desktop, apenas ajustes menores */
            .tools-grid {
              gap: 2rem !important;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Dashboard;