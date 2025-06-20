# 🔧 Configurando Domínio no Brevo (SPF & DKIM)

## 🚨 **Problema: Erro "MailPolicy violation"**

O erro `554 5.2.3 MailPolicy violation` significa que os servidores de email estão rejeitando suas mensagens porque não conseguem verificar se o Brevo tem permissão para enviá-las em nome do seu domínio (`intelligentdevsolutions.com`).

Para resolver isso, precisamos configurar o **SPF** e o **DKIM** nas configurações de DNS do seu domínio.

## ✅ **O Que São SPF e DKIM?**

- **SPF (Sender Policy Framework):** É um registro DNS que lista quais servidores de email têm permissão para enviar emails do seu domínio.
- **DKIM (DomainKeys Identified Mail):** Adiciona uma assinatura digital às suas mensagens, provando que elas não foram alteradas e vieram de um remetente autorizado.

Configurar ambos aumenta drasticamente a **entregabilidade** e a **reputação** dos seus emails, evitando que caiam no spam.

## 🛠️ **Passo a Passo para Configurar**

### **1. Acesse o Painel do Brevo**

1.  Faça login na sua conta Brevo.
2.  No canto superior direito, clique no nome da sua empresa e vá para **"Senders & IP"** (Remetentes e IP).
3.  Clique na guia **"Domains"** (Domínios).
4.  Clique em **"Add a domain"** (Adicionar um domínio) e insira `intelligentdevsolutions.com`.

### **2. Configure o Registro SPF**

O Brevo solicitará que você adicione ou modifique um registro `TXT` no seu DNS.

1.  **Acesse o painel de controle de DNS do seu domínio** (onde você comprou o domínio, ex: GoDaddy, HostGator, Cloudflare, etc.).
2.  Procure a seção de gerenciamento de DNS.
3.  **Se você já tem um registro SPF (TXT):**
    - Edite o registro existente. Ele deve começar com `"v=spf1"`.
    - Adicione `include:spf.brevo.com` antes do final (`-all`, `~all` ou `?all`).
    - **Exemplo:** Se seu registro era `"v=spf1 include:_spf.google.com ~all"`, ele se tornará `"v=spf1 include:_spf.google.com include:spf.brevo.com ~all"`.
4.  **Se você não tem um registro SPF:**
    - Crie um novo registro `TXT`.
    - **Host/Name:** `@` (ou deixe em branco, dependendo do provedor)
    - **Value/Content:** `v=spf1 include:spf.brevo.com -all`

### **3. Configure o Registro DKIM**

O Brevo também fornecerá um registro DKIM para adicionar ao seu DNS.

1.  No mesmo painel de DNS, crie um **novo registro `TXT`**.
2.  Copie os valores exatos fornecidos pelo Brevo:
    - **Host/Name:** `brevo._domainkey` (ou `brevo._domainkey.intelligentdevsolutions.com` se seu provedor adicionar o domínio automaticamente).
    - **Value/Content:** Cole o valor longo fornecido pelo Brevo. Geralmente começa com `"v=DKIM1; k=rsa; p=..."`.

### **4. Configure o DMARC (Recomendado)**

O DMARC diz aos servidores de email o que fazer se uma mensagem falhar na verificação SPF ou DKIM.

1.  Crie outro **novo registro `TXT`**.
2.  **Host/Name:** `_dmarc`
3.  **Value/Content:** `v=DMARC1; p=none;`
    - Isso começa no modo de "apenas monitoramento". Você pode torná-lo mais rigoroso (`p=quarantine` ou `p=reject`) mais tarde.

### **5. Verifique a Configuração no Brevo**

1.  Após adicionar os registros DNS, volte ao painel do Brevo (onde você adicionou o domínio).
2.  Clique em **"Verify & Authenticate"** (Verificar e Autenticar).
3.  **Atenção:** A propagação de DNS pode levar de alguns minutos a 48 horas. Se a verificação falhar, espere um pouco e tente novamente.

## ⚙️ **Não Esqueça de Reiniciar o Servidor Local!**

Lembre-se que, para os testes locais, o problema `BREVO_SMTP_USER: ❌ Não configurado` será resolvido ao **reiniciar o servidor de desenvolvimento**:

1.  Pare o processo `npm run dev` (Ctrl + C).
2.  Execute `npm run dev` novamente.

O servidor só carrega as variáveis do `.env.local` na inicialização.

## 🎉 **Resultado Final**

Após configurar o SPF e o DKIM e reiniciar o servidor local:

- O erro "MailPolicy violation" desaparecerá.
- Seus emails serão autenticados e chegarão à caixa de entrada.
- O formulário de contato funcionará perfeitamente.

Se tiver alguma dúvida sobre onde encontrar o painel de DNS ou como adicionar os registros, me diga qual é o seu provedor de domínio que eu te ajudo!
