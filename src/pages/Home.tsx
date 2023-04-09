import React from 'react'

const Home = () => {
  const text = {
    title: 'Here you will see',
    list: ['your favorite wallets', 'top 5 largest transactions of the month', "analytics of your spending's", 'etc'],
  }

  return (
    <main className="container mx-auto px-2">
      <article className="prose dark:prose-invert py-8">
        <h2>{text.title}</h2>
        <ul>
          {text.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </main>
  )
}

export default Home
