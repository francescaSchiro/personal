This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---
# To install it and run : 
- `yarn` to install dependencies;

- `yarn start` to start app locally.

---

- [x] install styled-components
- [x] install [stylelint](https://github.com/styled-components/stylelint-processor-styled-components)
- [ ] set up scaffolding (components and containers)
- [ ] set up theme folder
- [ ] install react-router
- [ ] set up routes
- [ ] animate logo FS
- [ ] install Material UI ? 
- [ ] redux?  
- [ ] fullpage.js ?
- [ ] [Normalize.css](http://necolas.github.io/normalize.css/)
- [ ] Prettier ?

why can't make automatic imports with lightbulg suggestions??


FIXING STYLE LINT: 

eslintConfig rules: 
      "react/jsx-no-undef": [true, { "allowGlobals": true }]

linter before: 

```json
      "plugins": ["stylelint-scss"],
      "rules": {
            "block-no-empty": null,
            "color-no-invalid-hex": true,
            "comment-empty-line-before": [
                  "always",
                  {
                  "ignore": ["stylelint-commands", "after-comment"]
                  }
            ],
            "declaration-colon-space-after": "always",
            "indentation": [
                  "tab",
                        {
                        "except": ["value"]
                        }
            ],
            "max-empty-lines": 2,
            "rule-empty-line-before": [
                  "always",
                  {
                        "except": ["first-nested"],
                        "ignore": ["after-comment"]
                  }
            ],
            "unit-whitelist": ["em", "rem", "%", "s"]
      }
  ```