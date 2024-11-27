export const componentTemplate = (name: string) => `import React from 'react';
import styles from './${name}.module.scss';

export interface ${name}Props {
  children?: React.ReactNode;
}

export const ${name}: React.FC<${name}Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

${name}.displayName = '${name}';
`;