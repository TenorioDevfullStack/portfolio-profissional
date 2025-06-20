# 🔧 Configuração de Variáveis de Ambiente

## ⚠️ **IMPORTANTE: Segurança**

As credenciais SMTP foram removidas do código por segurança. Agora você precisa configurar as variáveis de ambiente.

## 📝 **Passo a Passo**

### **1. Criar arquivo `.env.local`**

Crie um arquivo chamado `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
# Configurações SMTP Brevo
BREVO_SMTP_USER=901963001@smtp-brevo.com
BREVO_SMTP_PASS=xsmtpsib-2e4a53ab05fb3ac99bb4e53a8a8754725e026a1e0a3a37a0d83048d58a93d706-Evf2DHtd69RnABTj

# Configurações do Email
EMAIL_FROM=contato@intelligentdevsolutions.com
EMAIL_TO=contato@intelligentdevsolutions.com
```

### **2. Verificar `.gitignore`**

O arquivo `.gitignore` já está configurado para ignorar arquivos `.env*`, então suas credenciais não serão enviadas para o repositório.

### **3. Testar localmente**

Execute o projeto localmente:

```bash
npm run dev
```

O formulário de contato agora deve funcionar corretamente.

## 🚀 **Para Deploy em Produção**

### **Vercel:**

1. Vá para as configurações do projeto no Vercel
2. Adicione as variáveis de ambiente:
   - `BREVO_SMTP_USER`
   - `BREVO_SMTP_PASS`
   - `EMAIL_FROM`
   - `EMAIL_TO`

### **Netlify:**

1. Vá para Site settings > Environment variables
2. Adicione as mesmas variáveis

### **Outros provedores:**

Configure as variáveis de ambiente conforme a documentação do seu provedor.

## ✅ **Benefícios da Mudança**

- ✅ **Segurança:** Credenciais não ficam expostas no código
- ✅ **Flexibilidade:** Fácil mudança de configurações por ambiente
- ✅ **Boas práticas:** Segue padrões de segurança da indústria
- ✅ **Deploy seguro:** Funciona em qualquer provedor de hospedagem

## 🔍 **Verificação**

Para verificar se está funcionando:

1. Preencha o formulário de contato
2. Verifique se recebe o email em `contato@intelligentdevsolutions.com`
3. Verifique os logs do console para erros

## 🆘 **Solução de Problemas**

Se o formulário não funcionar:

1. Verifique se o arquivo `.env.local` existe
2. Confirme se as variáveis estão corretas
3. Reinicie o servidor de desenvolvimento
4. Verifique os logs do console

**Agora seu projeto está seguro e pronto para deploy!** 🚀
