const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/websiteContent.json', 'utf8'));

const newProducts = {
  "rejected-slag-dust": {
    "id": "rejected-slag-dust",
    "hero": {
      "eyebrow": "Our Products",
      "heading": "Rejected Slag Dust",
      "image": "/src/assets/producthero.jpg"
    },
    "overview": "Rejected Slag Dust is a fine-grained material produced during the crushing and sizing of Ferro Manganese Slag. As the slag is processed into specified sizes for its various end-uses, a fraction is generated as fines that fall outside the required size range. Rather than discarding this fraction, HESL directs it towards suitable downstream applications where slag-based mineral content can be productively used closing the loop on material that would otherwise be lost from the production cycle.",
    "whatItIsHeading": "What it is",
    "whatItIs": "Rejected Slag Dust shares the mineral character of the parent ferro manganese slag a silica-, alumina- and lime-bearing material with residual manganese  but in a finer, sized-down form. Its suitability for any given application depends on its composition, the degree of processing and the end-use specification, so it is supplied subject to suitability and customer requirements.",
    "specifications": [],
    "applications": [
      {
        "title": "Construction material use",
        "description": "Used in construction-related applications, including as aggregate and road-base material, subject to suitability and customer requirements."
      },
      {
        "title": "Cement & binder applications",
        "description": "Used in cement or binder-related applications, depending on composition, processing and end-use specifications."
      },
      {
        "title": "Industrial processing",
        "description": "Suitable for downstream industrial processes where slag-based mineral material can be further handled, processed or blended."
      }
    ],
    "navigation": {
      "heading": "Explore Our Products",
      "links": [
        {
          "title": "MOX Dust",
          "link": "/products/mox-dust"
        },
        {
          "title": "Ferro Manganese Slag",
          "link": "/products/ferro-manganese-slag"
        }
      ],
      "backLink": {
        "title": "Back to Business",
        "link": "/business"
      }
    }
  },
  "mox-dust": {
    "id": "mox-dust",
    "hero": {
      "eyebrow": "Our Products",
      "heading": "MOX Dust",
      "image": "/src/assets/producthero.jpg"
    },
    "overview": "MOX Dust is a fine, manganese-oxide-rich powder recovered from the furnace off-gas during high-temperature smelting in the Submerged Arc Furnace. As the furnace operates, fine particulate is carried into the gas stream and captured by HESL’s pollution-control and dust-recovery systems. Rather than being treated purely as an emissions-control residue, this recovered material is collected and supplied for use across selected industrial and downstream process applications.\n\nCapturing and channelling this dust into productive use reflects HESL’s wider approach to resource utilisation: material that leaves the furnace as fine particulate is recovered, handled and directed to applications where its manganese content has value.",
    "whatItIsHeading": "What it is",
    "whatItIs": "MOX Dust is a partly reduced by-product in which manganese is present as manganese oxides. Its fineness and volatile content mean it cannot simply be returned to the furnace as-is, which is why it is recovered separately and supplied to processes equipped to use a fine manganese-bearing feed. Its manganese content makes it a useful supplementary source of the metal for downstream users.",
    "specifications": [],
    "applications": [
      {
        "title": "Secondary smelting & ferro alloy production",
        "description": "Used as a supplementary manganese source in smelting, blended with primary ore to enrich the furnace charge."
      },
      {
        "title": "Mineral processing & recovery",
        "description": "Processed through hydrometallurgical or pyrometallurgical routes to extract manganese for chemical or metallurgical use."
      },
      {
        "title": "Industrial chemical production",
        "description": "Used as a manganese input in the manufacture of chemical compounds, dry-cell batteries and fertilisers, where manganese is a required raw material."
      }
    ],
    "navigation": {
      "heading": "Explore Our Products",
      "links": [
        {
          "title": "Rejected Slag Dust",
          "link": "/products/rejected-slag-dust"
        },
        {
          "title": "Ferro Manganese Slag",
          "link": "/products/ferro-manganese-slag"
        }
      ],
      "backLink": {
        "title": "Back to Business",
        "link": "/business"
      }
    }
  },
  "ferro-manganese-slag": {
    "id": "ferro-manganese-slag",
    "hero": {
      "eyebrow": "Our Products",
      "heading": "Ferro Manganese Slag",
      "image": "/src/assets/producthero.jpg"
    },
    "overview": "Ferro Manganese Slag is a dense, mineral-rich material generated during smelting, as molten ferro manganese is tapped from the Submerged Arc Furnace and separated from the slag phase. It carries a meaningful share of the manganese-bearing silicate and oxide minerals from the original furnace charge, which is precisely what makes it valuable to several downstream industries rather than a material to be discarded.\n\nBecause of its density, hardness and residual manganese content, the slag is actively sought as an input across construction, cement and secondary metal-recovery applications — sectors that value either its physical load-bearing behaviour or its mineral chemistry.",
    "whatItIsHeading": "What it contains",
    "whatItIs": "Ferro manganese slag is composed mainly of silica, alumina, lime and magnesia, together with residual manganese and iron oxides retained from the smelting process. Manganese in the slag is held largely within silicate phases, and it is this retained manganese that allows the material to be reprocessed for metal recovery. Composition varies with the ore blend and grade being produced, so HESL supplies indicative ranges rather than fixed figures.",
    "specifications": [],
    "applications": [
      {
        "title": "Road construction & infrastructure",
        "description": "Used as an aggregate in road base and sub-base layers, where its density, hardness and load-bearing strength suit it to heavy-duty civil applications."
      },
      {
        "title": "Cement & construction materials",
        "description": "Used as a supplementary mineral input in cement and construction-material manufacturing, contributing to mineral composition and reducing reliance on virgin raw materials."
      },
      {
        "title": "Secondary manganese recovery",
        "description": "Reprocessed as a feedstock in secondary smelting to recover residual manganese, an increasingly important route in markets where manganese ore is scarce or expensive."
      },
      {
        "title": "Industrial processing",
        "description": "Supplied to industrial operations that require a manganese-bearing process material."
      },
      {
        "title": "Land reclamation & controlled fill",
        "description": "Used in controlled fill applications where material density and stability are required."
      }
    ],
    "navigation": {
      "heading": "Explore Our Products",
      "links": [
        {
          "title": "Rejected Slag Dust",
          "link": "/products/rejected-slag-dust"
        },
        {
          "title": "MOX Dust",
          "link": "/products/mox-dust"
        }
      ],
      "backLink": {
        "title": "Back to Business",
        "link": "/business"
      }
    }
  }
};

data.products = { ...data.products, ...newProducts };

fs.writeFileSync('src/data/websiteContent.json', JSON.stringify(data, null, 2));
console.log('Done adding products to websiteContent.json');
