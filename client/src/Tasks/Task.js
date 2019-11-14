export default class Task {
  constructor({ id, name, description, date, completed = false }) {
    this.id = id
    this.name = name
    this.description = description
    this.date = date
    this.completed = completed
  }
}
