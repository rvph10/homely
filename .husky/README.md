# 🏠 Homely Git Hooks Documentation

This directory contains Git hooks powered by [Husky v9](https://typicode.github.io/husky/) to ensure code quality and family-friendly development practices for the Homely project.

## 🎯 Overview

Our Git hooks are designed specifically for the Homely family management system with:

- **Beautiful logging** with colors and emojis
- **Comprehensive error handling** and helpful suggestions
- **Family-friendly content validation**
- **Privacy and security checks**
- **Raspberry Pi deployment considerations**

## 🔧 Available Hooks

### 1. `pre-commit` - Code Quality Guardian

**Runs before each commit**

✅ **What it checks:**

- Lint-staged files for code quality
- Sensitive information detection
- Family-friendly content validation
- TypeScript code quality
- Commit size warnings
- TODO/FIXME tracking

🚀 **Family-specific features:**

- Detects inappropriate language
- Validates family-friendly variable names
- Warns about console.log usage
- Checks for TypeScript `any` types

### 2. `commit-msg` - Message Quality Enforcer

**Validates commit messages**

✅ **What it validates:**

- Message length (min 10 chars, max 72 recommended)
- Proper capitalization
- Family-friendly language
- Conventional commit format (recommended)
- Anti-patterns detection (WIP, temp, etc.)

📝 **Supported formats:**

```bash
# Conventional commits (recommended)
feat: add family calendar integration
fix: resolve task assignment bug
docs: update setup instructions

# Standard descriptive messages
Add family member management feature
Fix privacy settings for child accounts
Update documentation for Raspberry Pi setup
```

### 3. `pre-push` - Deployment Readiness Validator

**Runs before pushing to remote**

✅ **What it checks:**

- TypeScript type checking
- ESLint validation
- Build success
- Uncommitted changes
- Security scan for secrets
- Commit history quality
- Documentation presence
- Raspberry Pi readiness

🔒 **Main branch protection:**

- Extra strict validation
- Clean commit history requirements
- No WIP/temp commits allowed

## 🎨 Beautiful Logging

Our hooks provide colorful, informative output:

```bash
🏠 [HOMELY] Starting pre-commit checks...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ℹ️  [INFO] Checking for staged files...
✅ [SUCCESS] No sensitive information detected
⚠️  [WARNING] Large commit detected (25 files)
❌ [ERROR] Lint staged failed
```

## 🛠 Configuration Files

- **`.lintstagedrc.json`** - Lint-staged configuration
- **`package.json`** - Husky prepare script
- **Individual hook files** - Custom validation logic

## 🚫 Bypassing Hooks (Emergency Only)

```bash
# Skip pre-commit hooks (not recommended)
git commit --no-verify -m "Emergency fix"

# Skip pre-push hooks (not recommended)
git push --no-verify

# Temporarily disable all hooks
HUSKY=0 git commit -m "Maintenance"
```

## 🔧 Customization

### Adding New Checks

1. Edit the appropriate hook file (e.g., `.husky/pre-commit`)
2. Add your validation logic using the logging functions
3. Update the error counter if validation fails
4. Test your changes

### Logging Functions Available

```bash
log_info "Information message"      # Blue ℹ️
log_success "Success message"       # Green ✅
log_warning "Warning message"       # Yellow ⚠️
log_error "Error message"           # Red ❌
log_header "Header message"         # Purple 🏠
```

### Family-Specific Patterns

```bash
# Inappropriate content detection
inappropriate_words="word1|word2|word3"

# Family-friendly keywords
homely_keywords="family|home|task|calendar|reminder"

# Security patterns
secret_patterns=("password\s*=" "api_key\s*=")
```

## 🏥 Troubleshooting

### Common Issues

**1. "command not found: npx"**

```bash
# Install Node.js and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install --lts
```

**2. "Permission denied"**

```bash
# Make hooks executable
chmod +x .husky/pre-commit .husky/commit-msg .husky/pre-push
```

**3. "Husky command not found"**

```bash
# Reinstall Husky
npm install --save-dev husky
npm run prepare
```

**4. "Lint-staged not working"**

```bash
# Check .lintstagedrc.json configuration
# Ensure ESLint and Prettier are installed
npm install --save-dev eslint prettier
```

### Getting Help

1. **Check logs** - Hook output provides detailed error messages
2. **Review configuration** - Ensure all config files are present
3. **Test manually** - Run commands individually to isolate issues
4. **Family support** - Ask other family developers for help

## 🌟 Best Practices

### For Commits

- Write descriptive commit messages
- Keep commits focused and small
- Use conventional commit format when possible
- Avoid temporary/WIP commit messages

### For Code Quality

- Fix linting issues before committing
- Use proper TypeScript types
- Remove debug console.log statements
- Keep family-friendly content

### For Security

- Never commit secrets or passwords
- Use environment variables for sensitive data
- Review code for privacy implications
- Consider family data protection

## 📚 Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Lint-staged Documentation](https://github.com/okonet/lint-staged)
- [ESLint Documentation](https://eslint.org/docs/)
- [Prettier Documentation](https://prettier.io/docs/)

---

**Remember:** These hooks are here to help maintain quality and ensure our family project remains secure, well-documented, and ready for deployment on the Raspberry Pi! 🏠👨‍👩‍👧‍👦
