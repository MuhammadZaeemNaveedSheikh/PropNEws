
const Table = () => {
  return (
    <div className="border border-gray-darker rounded-2xl">
        <table className="w-full text-center">
            <thead>
                <tr className="font-semibold font-montserrat">
                    <th className="py-6 rounded-3xl">Rank</th>
                    <th className="py-6 rounded-3xl">Refferals</th>
                    <th className="py-6 rounded-3xl">Funding</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-6">1st</td>
                    <td className="py-6">Bluenose@gmail.com</td>
                    <td className="py-6">$300</td>
                </tr>
                <tr>
                    <td className="py-6">2nd</td>
                    <td className="py-6">Bluenose@gmail.com</td>
                    <td className="py-6">$300</td>
                </tr>
                <tr>
                    <td className="py-6">3rd</td>
                    <td className="py-6">Bluenose@gmail.com</td>
                    <td className="py-6">$300</td>
                </tr>
                <tr>
                    <td className="py-6">4th</td>
                    <td className="py-6">Bluenose@gmail.com</td>
                    <td className="py-6">$300</td>
                </tr>
                <tr>
                    <td className="py-6">5th</td>
                    <td className="py-6">Bluenose@gmail.com</td>
                    <td className="py-6">$300</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table
