  // wastech/pages/etcc.jsx
  import React, { useState, useMemo } from "react";
  import Layout from './Layout';

  /* ===============================
      🌱 DADOS KC (FRONT)
  ================================ */
  const culturas = [
    { nome: "Alface", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.0, fase4: 0.8 } },
    { nome: "Milho", kcValores: { fase1: 0.5, fase2: 0.9, fase3: 1.2, fase4: 0.6 } },
    { nome: "Feijão", kcValores: { fase1: 0.4, fase2: 0.8, fase3: 1.1, fase4: 0.7 } },
    { nome: "Arroz", kcValores: { fase1: 1.05, fase2: 1.2, fase3: 1.2, fase4: 0.9 } },
    { nome: "Trigo", kcValores: { fase1: 0.4, fase2: 0.8, fase3: 1.15, fase4: 0.4 } },
    { nome: "Soja", kcValores: { fase1: 0.5, fase2: 0.9, fase3: 1.15, fase4: 0.5 } },
    { nome: "Cana-de-açúcar", kcValores: { fase1: 0.4, fase2: 0.75, fase3: 1.25, fase4: 0.9 } },
    { nome: "Tomate", kcValores: { fase1: 0.6, fase2: 1.15, fase3: 1.15, fase4: 0.8 } },
    { nome: "Batata", kcValores: { fase1: 0.5, fase2: 0.85, fase3: 1.15, fase4: 0.75 } },
    { nome: "Cebola", kcValores: { fase1: 0.7, fase2: 1.05, fase3: 1.05, fase4: 0.85 } },
    { nome: "Cenoura", kcValores: { fase1: 0.7, fase2: 1.0, fase3: 1.05, fase4: 0.95 } },
    { nome: "Repolho", kcValores: { fase1: 0.7, fase2: 1.05, fase3: 1.05, fase4: 0.95 } },
    { nome: "Pepino", kcValores: { fase1: 0.6, fase2: 1.0, fase3: 1.1, fase4: 0.75 } },
    { nome: "Abóbora", kcValores: { fase1: 0.5, fase2: 0.9, fase3: 1.05, fase4: 0.8 } },
    { nome: "Melancia", kcValores: { fase1: 0.4, fase2: 0.85, fase3: 1.05, fase4: 0.75 } },
    { nome: "Melão", kcValores: { fase1: 0.5, fase2: 0.9, fase3: 1.05, fase4: 0.75 } },
    { nome: "Banana", kcValores: { fase1: 0.5, fase2: 0.9, fase3: 1.2, fase4: 1.1 } },
    { nome: "Manga", kcValores: { fase1: 0.4, fase2: 0.75, fase3: 1.0, fase4: 0.8 } },
    { nome: "Laranja", kcValores: { fase1: 0.6, fase2: 0.85, fase3: 1.0, fase4: 0.8 } },
    { nome: "Maçã", kcValores: { fase1: 0.5, fase2: 0.85, fase3: 1.0, fase4: 0.7 } },
    { nome: "Uva", kcValores: { fase1: 0.3, fase2: 0.7, fase3: 0.95, fase4: 0.6 } },
    { nome: "Café", kcValores: { fase1: 0.4, fase2: 0.8, fase3: 1.1, fase4: 0.9 } },
    { nome: "Algodão", kcValores: { fase1: 0.35, fase2: 0.75, fase3: 1.15, fase4: 0.7 } },
    { nome: "Girassol", kcValores: { fase1: 0.4, fase2: 0.8, fase3: 1.1, fase4: 0.6 } },
    { nome: "Sorgo", kcValores: { fase1: 0.35, fase2: 0.75, fase3: 1.1, fase4: 0.6 } },
    { nome: "Amendoim", kcValores: { fase1: 0.4, fase2: 0.8, fase3: 1.05, fase4: 0.6 } },
    { nome: "Abacate", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.0, fase4: 0.8 } },
    { nome: "Batata-doce", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.1, fase4: 0.6 } },
    { nome: "Batata-inglesa", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.1, fase4: 0.7 } },
    { nome: "Batata-baroa", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.0, fase4: 0.7 } },
    { nome: "Berinjela", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.1, fase4: 0.7 } },
    { nome: "Beterraba", kcValores: { fase1: 0.4, fase2: 0.8, fase3: 1.1, fase4: 0.8 } },
    { nome: "Crucíferas", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.0, fase4: 0.8 } },
    { nome: "Feijão vagem", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.1, fase4: 0.7 } },
    { nome: "Feijão seco", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.1, fase4: 0.4 } },
    { nome: "Milho-doce", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.1, fase4: 0.9 } },
    { nome: "Milho grãos", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.2, fase4: 0.5 } },
    { nome: "Rabanete", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.0, fase4: 0.8 } },
    
    // Culturas do São Benedito (hortaliças e hortas caseiras)
    { nome: "Couve", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 0.9, fase4: 0.8 } },
    { nome: "Alho", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.1, fase4: 0.6 } },
    { nome: "Manjericão", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 0.9, fase4: 0.8 } },
    { nome: "Salsa", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 0.9, fase4: 0.8 } },
    { nome: "Coentro", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 0.9, fase4: 0.8 } },
    { nome: "Morango", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 0.9, fase4: 0.7 } },
    { nome: "Quiabo", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.0, fase4: 0.7 } },
    { nome: "Abobrinha", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.0, fase4: 0.8 } },
    { nome: "Ervilha", kcValores: { fase1: 0.4, fase2: 0.7, fase3: 1.1, fase4: 0.5 } }
  ];
  
  const fasesMap = {
    fase1: "Fase 1 - Inicial",
    fase2: "Fase 2 - Desenvolvimento",
    fase3: "Fase 3 - Meio",
    fase4: "Fase 4 - Final"
  };

  const ETCC = () => {
    const [eto, setEto] = useState("");
    const [culturaSelecionada, setCulturaSelecionada] = useState("");
    const [faseSelecionada, setFaseSelecionada] = useState("");
    const [resultado, setResultado] = useState(null);
    const [loading, setLoading] = useState(false);

    const cultura = useMemo(() => {
      return culturas.find(c => c.nome === culturaSelecionada);
    }, [culturaSelecionada]);

    const calcularEtc = () => {
      if (!eto || !cultura || !faseSelecionada) {
        alert("⚠️ Por favor, preencha todos os campos antes de calcular.");
        return;
      }

      setLoading(true);
      
      // Simula um delay curto para efeito visual de processamento
      setTimeout(() => {
        const kc = cultura.kcValores[faseSelecionada];
        const valorCalculado = Number(eto) * kc;

        setResultado({
          cultura: cultura.nome,
          fase: faseSelecionada,
          kc,
          eto,
          etc: valorCalculado
        });
        setLoading(false);
      }, 500);
    };

    const limparCampos = () => {
      setEto("");
      setCulturaSelecionada("");
      setFaseSelecionada("");
      setResultado(null);
    };

    return (
      <Layout>
        <div style={styles.container}>
          <div style={styles.header}>
            <h1 style={styles.title}>Calculadora de ETc</h1>
            <p style={styles.pageSubtitle}>Determine a necessidade hídrica real da sua plantação</p>
          </div>

          <div style={styles.mainGrid}>
            {/* CARD DE INPUT */}
            <div style={styles.card}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>🌤️ ETo (Evapotranspiração de Referência)</label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="Ex: 5.4"
                  value={eto}
                  onChange={(e) => setEto(e.target.value)}
                  style={styles.input}
                />
                <small style={styles.helpText}>Valor em mm/dia obtido via estação meteorológica.</small>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>🌱 Selecione a Cultura</label>
                <select
                  value={culturaSelecionada}
                  onChange={(e) => {
                    setCulturaSelecionada(e.target.value);
                    setFaseSelecionada("");
                  }}
                  style={styles.select}
                >
                  <option value="">Escolha uma planta...</option>
                  {culturas.sort((a,b) => a.nome.localeCompare(b.nome)).map((c, i) => (
                    <option key={i} value={c.nome}>{c.nome}</option>
                  ))}
                </select>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>📈 Fase do Ciclo</label>
                <select
                  value={faseSelecionada}
                  onChange={(e) => setFaseSelecionada(e.target.value)}
                  style={styles.select}
                  disabled={!cultura}
                >
                  <option value="">Selecione a fase...</option>
                  <option value="fase1">Fase 1 - Inicial</option>
                  <option value="fase2">Fase 2 - Desenvolvimento</option>
                  <option value="fase3">Fase 3 - Meio (Auge)</option>
                  <option value="fase4">Fase 4 - Final (Maturação)</option>
                </select>
              </div>

              <div style={styles.buttonGroup}>
                <button 
                  onClick={calcularEtc} 
                  style={{...styles.button, opacity: loading ? 0.7 : 1}} 
                  disabled={loading}
                >
                  {loading ? "Processando..." : "🧮 Calcular Necessidade"}
                </button>
                <button onClick={limparCampos} style={styles.buttonSecondary}>
                  🗑️ Limpar
                </button>
              </div>
            </div>

            {/* CARD DE RESULTADO */}
            {resultado && (
              <div style={styles.resultadoCard}>
                <h3 style={styles.resTitle}>📊 Relatório de Irrigação</h3>
                <div style={styles.resRow}>
                  <span>Cultura:</span>
                  <strong>{resultado.cultura}</strong>
                </div>
                <div style={styles.resRow}>
                  <span>Estágio:</span>
                  <strong>{fasesMap[resultado.fase]}</strong>
                </div>
                <div style={styles.resRow}>
                  <span>Coeficiente (Kc):</span>
                  <strong>{resultado.kc}</strong>
                </div>
                <div style={styles.resRow}>
                  <span>ETo base:</span>
                  <strong>{resultado.eto} mm/dia</strong>
                </div>
                
                <div style={styles.finalEtc}>
                  <p style={styles.etcLabel}>Lâmina de Água Necessária (ETc):</p>
                  <h2 style={styles.etcValue}>{resultado.etc.toFixed(2)} mm/dia</h2>
                </div>
                <p style={styles.infoFooter}>* Este valor representa quanto de água a cultura consome por dia nesta fase.</p>
              </div>
            )}
          </div>

        
        </div>
      </Layout>
    );
  };

  /* ===============================
      🎨 ESTILOS OTIMIZADOS
  ================================ */
  const styles = {
    container: { 
      padding: "40px 20px", 
      background: "#f4f9f4", 
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Roboto, sans-serif"
    },
    header: { textAlign: "center", marginBottom: 40 },
    title: { fontSize: "2.5rem", color: "#1a3c1a", margin: 0 },
    pageSubtitle: { color: "#666", fontSize: "1.1rem" },
    
    mainGrid: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
      maxWidth: "1000px",
      margin: "0 auto"
    },
    
    card: { 
      background: "white", 
      padding: "30px", 
      borderRadius: "16px", 
      width: "100%",
      maxWidth: "500px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
      border: "1px solid #e0e0e0"
    },
    
    inputGroup: { marginBottom: "20px" },
    label: { display: "block", marginBottom: "8px", fontWeight: "600", color: "#333" },
    input: { 
      width: "100%", 
      padding: "12px", 
      borderRadius: "8px", 
      border: "2px solid #eee",
      fontSize: "1rem",
      outline: "none",
      transition: "border-color 0.3s",
      boxSizing: "border-box"
    },
    select: { 
      width: "100%", 
      padding: "12px", 
      borderRadius: "8px", 
      border: "2px solid #eee", 
      background: "white",
      fontSize: "1rem"
    },
    helpText: { color: "#999", fontSize: "0.85rem", marginTop: "5px", display: "block" },
    
    buttonGroup: { display: "flex", gap: "12px", marginTop: "25px" },
    button: { 
      flex: 2,
      background: "#22c55e", 
      color: "white", 
      padding: "14px", 
      border: "none", 
      borderRadius: "8px", 
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "transform 0.2s",
    },
    buttonSecondary: { 
      flex: 1,
      background: "#f3f4f6", 
      color: "#4b5563", 
      padding: "14px", 
      border: "none", 
      borderRadius: "8px", 
      cursor: "pointer",
      fontWeight: "600"
    },

    resultadoCard: {
      width: "100%",
      maxWidth: "500px",
      background: "#ffffff",
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(34, 197, 94, 0.1)",
      border: "2px solid #22c55e",
      animation: "fadeIn 0.5s ease-out"
    },
    resTitle: { margin: "0 0 20px 0", color: "#1a3c1a", textAlign: "center", borderBottom: "1px solid #eee", paddingBottom: "10px" },
    resRow: { display: "flex", justifyContent: "space-between", marginBottom: "12px", color: "#555" },
    
    finalEtc: { 
      background: "#f0fdf4", 
      padding: "20px", 
      borderRadius: "12px", 
      textAlign: "center", 
      marginTop: "20px",
      border: "1px dashed #22c55e"
    },
    etcLabel: { margin: 0, color: "#166534", fontWeight: "600" },
    etcValue: { margin: "5px 0 0 0", color: "#15803d", fontSize: "2.2rem" },
    infoFooter: { fontSize: "0.8rem", color: "#888", textAlign: "center", marginTop: "15px" },

    infoSection: {
      maxWidth: "600px",
      margin: "50px auto 0",
      textAlign: "center",
      color: "#555",
      padding: "20px",
      borderTop: "1px solid #ddd"
    },
    formula: { 
      background: "#fff", 
      display: "inline-block", 
      padding: "10px 20px", 
      borderRadius: "8px", 
      fontWeight: "bold", 
      fontSize: "1.2rem",
      margin: "10px 0",
      boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
    }
  };

  export default ETCC;