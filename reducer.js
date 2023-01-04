const reduceWithIndex = (func, iterable, initializer) =>
  [...iterable].reduce((accumulator, element, index) =>
    func(accumulator, element, index), initializer);
