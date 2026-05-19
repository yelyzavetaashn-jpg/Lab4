class BiDirectionalPriorityQueue {
  constructor() {
    this.queue = [];
    this.sequence = 0;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}
enqueue(value, priority) {
  if (
    priority === undefined ||
    priority === null ||
    Number.isNaN(priority)
  ) {
    throw new Error("Priority must be valid");
  }

  this.queue.push({
    value,
    priority,
    id: this.sequence++
  });
}
isHigherPriority(current, selected) {
  return (
    current.priority > selected.priority ||
    (
      current.priority === selected.priority &&
      current.id < selected.id
    )
  );
}

isLowerPriority(current, selected) {
  return (
    current.priority < selected.priority ||
    (
      current.priority === selected.priority &&
      current.id < selected.id
    )
  );
}
findElementIndex(mode) {
  if (this.isEmpty()) {
    return -1;
  }

  let selectedIndex = 0;

  for (let i = 1; i < this.queue.length; i++) {
    const current = this.queue[i];
    const selected = this.queue[selectedIndex];

    switch (mode) {
      case "highest":
        if (this.isHigherPriority(current, selected)) {
          selectedIndex = i;
        }
        break;

      case "lowest":
        if (this.isLowerPriority(current, selected)) {
          selectedIndex = i;
        }
        break;

      case "oldest":
        if (current.id < selected.id) {
          selectedIndex = i;
        }
        break;

      case "newest":
        if (current.id > selected.id) {
          selectedIndex = i;
        }
        break;

      default:
        throw new Error(
          "Invalid mode"
        );
    }
  }

  return selectedIndex;
}
peek(mode) {
  const index = this.findElementIndex(mode);

  return index === -1
    ? null
    : this.queue[index];
}
dequeue(mode) {
  const index = this.findElementIndex(mode);

  return index === -1
    ? null
    : this.queue.splice(index, 1)[0];
}