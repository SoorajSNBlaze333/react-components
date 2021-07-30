const search = (list, query) => list
  .filter((l) => l.keywords
    .some((k) => k
      .toLowerCase()
      .includes(query)
    )
  )

export {
  search,
}