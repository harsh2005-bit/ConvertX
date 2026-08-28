import React from "react";

interface SchemaJsonLdProps {
  schema: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SchemaJsonLd: React.FC<SchemaJsonLdProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
