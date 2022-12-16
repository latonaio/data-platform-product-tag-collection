db.createCollection("data_platform_product_tag_data", {
  validator: {
     $jsonSchema: {
        bsonType: "object",
        required: [ "BusinessPartner", "Product" ],
        properties: {
          BusinessPartner: {
              bsonType: "number",
              pattern:  "^.+$"
           },
          Product: {
              bsonType: "string",
              pattern:  "^.+$"
          },
          ProductTag: {
              bsonType: "string",
              pattern:  "^.+$"
          }
        }
     }
  }
})