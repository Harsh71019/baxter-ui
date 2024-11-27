// scripts/generate-component.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  componentTemplate,
  styleTemplate,
  storyTemplate,
  testTemplate,
  indexTemplate,
} from './templates/templates.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const validateComponentName = name => {
  if (!/^[A-Z][A-Za-z0-9]+$/.test(name)) {
    console.error('Component name must be in PascalCase!');
    process.exit(1);
  }
};

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a component name!');
  process.exit(1);
}

validateComponentName(componentName);

const componentDir = path.join(__dirname, '../src/components', componentName);

// Create component directory
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

// Create files
const files = [
  {
    name: `${componentName}.tsx`,
    content: componentTemplate(componentName),
  },
  {
    name: `${componentName}.module.scss`,
    content: styleTemplate(componentName),
  },
  {
    name: `${componentName}.stories.tsx`,
    content: storyTemplate(componentName),
  },
  {
    name: `${componentName}.test.tsx`,
    content: testTemplate(componentName),
  },
  {
    name: 'index.ts',
    content: indexTemplate(componentName),
  },
];

files.forEach(file => {
  fs.writeFileSync(path.join(componentDir, file.name), file.content);
});

console.log(`Component ${componentName} created successfully!`);
