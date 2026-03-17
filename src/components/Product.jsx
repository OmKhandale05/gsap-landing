const Product = () => {
    return ( 
        <div className="min-h-screen bg-gray-900 text-white p-10">
            <h2 className="text-3xl mb-10 text-center">Products</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card bg-black p-6 rounded-xl">Card1</div>
                <div className="card bg-black p-6 rounded-xl">Card2</div>
                <div className="card bg-black p-6 rounded-xl">Card3</div>
            </div>
        </div>
     );
}
 
export default Product;