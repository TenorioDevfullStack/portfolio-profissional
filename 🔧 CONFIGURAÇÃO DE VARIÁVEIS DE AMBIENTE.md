# 🔧 Configuração de Variáveis de Ambiente

## ⚠️ **IMPORTANTE: Segurança**

As credenciais SMTP foram removidas do código por segurança. **A senha anterior foi comprometida e precisa ser trocada.**

## 📝 **Passo a Passo**

### **1. Atualizar credenciais SMTP no Brevo**

1. Acesse o painel do Brevo (Sendinblue)
2. Vá para **SMTP & API** > **SMTP**
3. **Gere uma nova chave SMTP** (a anterior foi comprometida)
4. Anote o novo usuário e senha

### **2. Criar arquivo `.env.local`**

Crie um arquivo chamado `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
# Configurações SMTP Brevo (NOVAS CREDENCIAIS)
BREVO_SMTP_USER=901963001@smtp-brevo.com
BREVO_SMTP_PASS=SUA_NOVA_SENHA_SMTP_AQUI

# Configurações do Email
EMAIL_FROM=contato@intelligentdevsolutions.com
EMAIL_TO=contato@intelligentdevsolutions.com
```

### **3. Verificar `.gitignore`**

O arquivo `.gitignore` já está configurado para ignorar arquivos `.env*`, então suas credenciais não serão enviadas para o repositório.

### **4. Testar localmente**

Execute o projeto localmente:

```bash
npm run dev
```

O formulário de contato agora deve funcionar corretamente.

## 🚀 **Para Deploy em Produção**

### **Vercel:**

1. Vá para as configurações do projeto no Vercel
2. Adicione as variáveis de ambiente:
   - `BREVO_SMTP_USER` = 901963001@smtp-brevo.com
   - `BREVO_SMTP_PASS` = SUA_NOVA_SENHA_SMTP
   - `EMAIL_FROM` = contato@intelligentdevsolutions.com
   - `EMAIL_TO` = contato@intelligentdevsolutions.com

### **Netlify:**

1. Vá para Site settings > Environment variables
2. Adicione as mesmas variáveis

### **Outros provedores:**

Configure as variáveis de ambiente conforme a documentação do seu provedor.

## 🔒 **Medidas de Segurança Implementadas**

- ✅ **Credenciais removidas** do código-fonte
- ✅ **Variáveis de ambiente** configuradas
- ✅ **Gitignore** protegendo arquivos `.env*`
- ✅ **Nova senha SMTP** necessária
- ✅ **Validação** de variáveis no código

## ✅ **Benefícios da Mudança**

- ✅ **Segurança:** Credenciais não ficam expostas no código
- ✅ **Flexibilidade:** Fácil mudança de configurações por ambiente
- ✅ **Boas práticas:** Segue padrões de segurança da indústria
- ✅ **Deploy seguro:** Funciona em qualquer provedor de hospedagem
- ✅ **Proteção:** Nova senha elimina risco de comprometimento

## 🔍 **Verificação**

Para verificar se está funcionando:

1. Preencha o formulário de contato
2. Verifique se recebe o email em `contato@intelligentdevsolutions.com`
3. Verifique os logs do console para erros

## 🆘 **Solução de Problemas**

Se o formulário não funcionar:

1. Verifique se o arquivo `.env.local` existe
2. Confirme se as **novas** variáveis estão corretas
3. Reinicie o servidor de desenvolvimento
4. Verifique os logs do console
5. Confirme se a nova senha SMTP está ativa no Brevo

## 📞 **Suporte Brevo**

Se precisar de ajuda com as credenciais SMTP:

- Acesse: https://app.brevo.com/settings/keys/smtp
- Gere uma nova chave SMTP
- Use o usuário: 901963001@smtp-brevo.com
- A senha será a nova chave gerada

**Agora seu projeto está seguro e protegido!** 🛡️🚀
