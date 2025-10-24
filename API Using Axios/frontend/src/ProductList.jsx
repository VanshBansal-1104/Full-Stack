import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)

    axios
      .get('http://localhost:3000/api/products')
      .then(res => {
        if (mounted) setProducts(res.data)
      })
      .catch(err => {
        if (mounted) setError(err.message || 'Error fetching products')
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  if (loading) return <p>Loading products…</p>
  if (error) return <p className="error">Error: {error}</p>

  return (
    <div className="grid">
      {products.map(p => (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <p className="price">${p.price}</p>
        </div>
      ))}
    </div>
  )
}
