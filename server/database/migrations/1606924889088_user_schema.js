"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.table("users", (table) => {
      // alter table
    });
  }

  down() {
    this.table("users", (table) => {
      table.boolean("confirmed").nullable();
    });
  }
}

module.exports = UserSchema;
