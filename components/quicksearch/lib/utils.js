const search = (list, query) => list
  .filter((l) => l.keywords
    .some((k) => k
      .includes(query)
    )
  )

export {
  search,
}