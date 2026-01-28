import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: "📊", path: "/" },
    { name: "ETo - Evapotranspiração", icon: "🌦️", path: "/eto" },
    { name: "ETcc - Cultura", icon: "🌱", path: "/etcc" },
    { name: "Kc - Coeficiente", icon: "📊", path: "/ko" },
  ];

  // Fechar sidebar ao clicar fora (mobile)
  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const sidebar = document.querySelector('aside');
        const hamburger = document.querySelector('button[style*="z-index: 1001"]');
        
        if (sidebar && 
            !sidebar.contains(e.target as Node) && 
            hamburger && 
            !hamburger.contains(e.target as Node)) {
          setIsSidebarOpen(false);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobile, isSidebarOpen]);

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      position: 'relative'
    }}>
      {/* Botão Hamburguer - RESPONSIVO */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        style={{
          position: 'fixed',
          top: 'clamp(12px, 3vw, 20px)',
          left: isSidebarOpen ? 'calc(clamp(240px, 70vw, 280px) - clamp(20px, 5vw, 25px))' : 'clamp(12px, 3vw, 20px)',
          zIndex: 1001,
          width: 'clamp(40px, 10vw, 50px)',
          height: 'clamp(40px, 10vw, 50px)',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          backgroundColor: '#10b981',
          border: 'none',
          color: 'white',
          fontSize: 'clamp(18px, 4vw, 24px)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
          transition: 'all 0.3s ease',
          touchAction: 'manipulation'
        }}
        aria-label={isSidebarOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Overlay para fechar menu no mobile - RESPONSIVO */}
      {isSidebarOpen && isMobile && (
        <div 
          onClick={() => setIsSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
            backdropFilter: 'blur(2px)'
          }}
        />
      )}

      {/* Sidebar - RESPONSIVO */}
      <aside style={{
        width: isSidebarOpen 
          ? (isMobile ? 'calc(100% - clamp(40px, 10vw, 60px))' : 'clamp(240px, 70vw, 280px)')
          : '0px',
        backgroundColor: 'white',
        padding: isSidebarOpen ? 'clamp(1rem, 4vw, 2rem)' : '0',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isMobile ? '4px 0 20px rgba(0, 0, 0, 0.15)' : '4px 0 20px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 999,
        maxWidth: isMobile ? '90%' : '280px'
      }}>
        {/* Logo HydroSense - RESPONSIVO */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(8px, 2vw, 12px)',
          marginBottom: 'clamp(2rem, 6vw, 3rem)',
          paddingBottom: 'clamp(1rem, 3vw, 1.5rem)',
          borderBottom: '1px solid #e5e7eb',
          flexShrink: 0
        }}>
          <img 
            src="/Imagens/logohydro.jpeg" 
            alt="HydroSense Logo"
            style={{
              width: 'clamp(40px, 10vw, 50px)',
              height: 'clamp(40px, 10vw, 50px)',
              objectFit: 'contain',
              flexShrink: 0
            }}
            loading="lazy"
          />
          <div style={{ minWidth: 0 }}>
            <h1 style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontWeight: '800',
              color: '#064e3b',
              margin: 0,
              lineHeight: '1.2',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              HydroSense
            </h1>
            <p style={{
              fontSize: 'clamp(0.7rem, 2vw, 0.875rem)',
              color: '#6b7280',
              margin: 'clamp(2px, 0.5vw, 0) 0 0 0',
              lineHeight: '1.3',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              Irrigação Inteligente
            </p>
          </div>
        </div>
        
        {/* Menu de Navegação - RESPONSIVO */}
        <nav style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 'clamp(6px, 1.5vw, 8px)',
          flex: 1,
          overflowY: 'auto',
          paddingRight: 'clamp(4px, 1vw, 8px)'
        }}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => {
                if (isMobile) {
                  setIsSidebarOpen(false);
                }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(8px, 2vw, 12px)',
                padding: 'clamp(10px, 2.5vw, 12px) clamp(12px, 3vw, 16px)',
                borderRadius: 'clamp(8px, 2vw, 12px)',
                textDecoration: 'none',
                color: '#374151',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                minHeight: 'clamp(44px, 10vw, 48px)'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span style={{ 
                fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                flexShrink: 0 
              }}>
                {item.icon}
              </span>
              <span style={{ 
                fontWeight: '500',
                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Status do Sistema - RESPONSIVO */}
        <div style={{
          marginTop: 'auto',
          padding: 'clamp(0.75rem, 2vw, 1rem)',
          backgroundColor: '#f0fdf4',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          border: '1px solid #bbf7d0',
          flexShrink: 0
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'clamp(6px, 1.5vw, 8px)', 
            marginBottom: 'clamp(2px, 0.5vw, 4px)' 
          }}>
            <div style={{
              width: 'clamp(6px, 1.5vw, 8px)',
              height: 'clamp(6px, 1.5vw, 8px)',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              animation: 'pulse 1.5s infinite',
              flexShrink: 0
            }} />
            <span style={{ 
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', 
              color: '#166534', 
              fontWeight: '600',
              lineHeight: '1.3'
            }}>
              Sistema Pronto
            </span>
          </div>
          <p style={{ 
            fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)', 
            color: '#6b7280', 
            margin: 0,
            lineHeight: '1.4'
          }}>
            Navegue pelas ferramentas
          </p>
        </div>
      </aside>

      {/* Área Principal - RESPONSIVO */}
      <main style={{
        flex: 1,
        padding: isMobile 
          ? 'clamp(4rem, 12vw, 5rem) clamp(0.75rem, 3vw, 1.5rem) clamp(1.5rem, 4vw, 3rem)' 
          : 'clamp(3rem, 6vw, 4rem) clamp(1.5rem, 4vw, 3rem) clamp(2rem, 5vw, 3rem)',
        marginLeft: isSidebarOpen && !isMobile 
          ? 'clamp(240px, 70vw, 280px)' 
          : '0',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden'
      }}>
        {children}
      </main>

      {/* Estilos CSS inline para animações */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% { 
              opacity: 1; 
              transform: scale(1);
            }
            50% { 
              opacity: 0.7; 
              transform: scale(1.1);
            }
          }
          
          /* Scrollbar personalizada */
          aside nav::-webkit-scrollbar {
            width: 4px;
          }
          
          aside nav::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }
          
          aside nav::-webkit-scrollbar-thumb {
            background: #c1c1c1;
            border-radius: 4px;
          }
          
          aside nav::-webkit-scrollbar-thumb:hover {
            background: #a1a1a1;
          }
          
          /* Melhorias de acessibilidade */
          button:focus-visible {
            outline: 3px solid #10b981;
            outline-offset: 2px;
          }
          
          a:focus-visible {
            outline: 3px solid #3b82f6;
            outline-offset: 2px;
            border-radius: 8px;
          }
          
          /* Suavizar transições para dispositivos com preferência reduzida */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
          
          /* Otimização para telas muito pequenas */
          @media (max-width: 320px) {
            aside {
              width: 100% !important;
              max-width: 100% !important;
            }
            
            button {
              left: 12px !important;
            }
          }
          
          /* Melhorias para tablets */
          @media (min-width: 768px) and (max-width: 1024px) {
            aside {
              width: ${isSidebarOpen ? '260px' : '0'} !important;
            }
            
            main {
              margin-left: ${isSidebarOpen ? '260px' : '0'} !important;
              padding: 2.5rem !important;
            }
            
            button {
              left: ${isSidebarOpen ? '235px' : '20px'} !important;
            }
          }
          
          /* Desktop grande */
          @media (min-width: 1400px) {
            aside {
              width: ${isSidebarOpen ? '300px' : '0'} !important;
            }
            
            main {
              margin-left: ${isSidebarOpen ? '300px' : '0'} !important;
              padding: 4rem !important;
            }
            
            button {
              left: ${isSidebarOpen ? '275px' : '20px'} !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;