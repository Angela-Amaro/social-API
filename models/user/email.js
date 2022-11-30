const { Schema } = require('mongoose');

const assignmentSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            validate: {
                validator: function(v) {
                  return '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$'.test(v);
                },
                message: props => `${props.value} is not a valid email!`
              },
              required: [true, 'User email required']
            }
        }
);
// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)

module.exports = assignmentSchema;