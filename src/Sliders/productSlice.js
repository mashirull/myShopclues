import { createSlice , createAsyncThunk, current} from "@reduxjs/toolkit";


const initialState = {
    products : [] ,
    singleProduct : [] ,
    isLoadding : false,
    isError : false,
    dealsOfDayProduct : [],
    totalProduct : []
}



// fetching Deal of the day product
export const fetchDealOfDayProduct = createAsyncThunk('fetchingProduct'  , async ()=>{

    const response =await fetch(`https://dummyjson.com/products?skip=20&limit=10`);
    const data = await response.json()

    return data
})

// fetching all product to showing in product page
export const fetchProduct = createAsyncThunk('gettingProduct' , async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await response.json()
    return data

})

// fetching and filter by category 
export const filterByCategory = createAsyncThunk('getFilteredCategory' , async (category) => {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json()
    return data
})

// fetching single product with the help of id
export const fetchSingleProduct = createAsyncThunk('singleProduct' , async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json()
    return data
})


// fetching product by query string 
export const searchProduct = createAsyncThunk('searchingProduct' , async (query) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=0`);
    const data  = await response.json()
    console.log(data.products)
    return data.products
})


const productSlice = createSlice({
    name  : 'gettingProduct',
    initialState ,
    extraReducers : (builder)=> {

// This is a pending state of createAsyncThunk operation

        builder.addCase(fetchDealOfDayProduct.pending , (state , action) => {
            state.isLoadding = true
        });

        builder.addCase(fetchProduct.pending , (state , action) => {
            state.isLoadding =true
        })

        builder.addCase(filterByCategory.pending , (state , action) => {
            state.isLoadding = true
        })

        builder.addCase(fetchSingleProduct.pending , (state , action) => {
            state.isLoadding = true
        })

        builder.addCase(searchProduct.pending , (state , action) => {
            state.isLoadding = true
        })




 // This is a fulfilled/done state of createAsyncThunk operation

        builder.addCase(fetchDealOfDayProduct.fulfilled , (state , action) => {
            state.dealsOfDayProduct = action.payload.products
            state.isLoadding = false
           
        });

        builder.addCase(fetchProduct.fulfilled , (state , action) => {
            state.products = action.payload.products
            state.totalProduct = [...state.products]
            state.isLoadding = false           
        });

        builder.addCase(filterByCategory.fulfilled , (state , action) => {
            state.isLoadding = false
            state.products = action.payload.products
        })

        builder.addCase(fetchSingleProduct.fulfilled , (state , action) => {
            state.isLoadding = false
            state.singleProduct = action.payload
        })
         
        builder.addCase(searchProduct.fulfilled , (state , action) => {
            state.isLoadding = false
            state.products = action.payload
        })





 // This is a rejection state of createAsyncThunk operation
        builder.addCase(fetchDealOfDayProduct.rejected ,  (state , action) => {
            state.isError = true
            state.isLoadding = false
        });

        builder.addCase(fetchProduct.rejected ,  (state , action) => {
            state.isError = true
            state.isLoadding = false
        });
        builder.addCase(filterByCategory.rejected , (state , action)  => {
            state.isLoadding = false
            state.isError = true
        })

        builder.addCase(fetchSingleProduct.rejected , (state , action)  => {
            state.isLoadding = false
            state.isError = true
        })

        builder.addCase(searchProduct.rejected , (state , action)  => {
            state.isLoadding = false
            state.isError = true
        })

   },




    reducers : {
        filterByBrand : (state , action) => {
            const brandName = action.payload
            const allProducts = [...state.totalProduct]
            const apdatedProduct = allProducts.filter((product) => product.brand === brandName)

            state.products = apdatedProduct
            
        },
        
        sortProduct : (state , action) => {
            let sort_by = action.payload
            let allProducts1 = [...current(state.products)] 

            if(sort_by === 'a-z'){
                const updatedProduct =  allProducts1.sort((a ,b) => {
                    return a.title.localeCompare(b.title)
                })

                state.products = updatedProduct
               
            }

            if(sort_by === 'z-a'){
                const updatedProduct =  allProducts1.sort((a ,b) => {
                    return b.title.localeCompare(a.title)
                })

                state.products = updatedProduct
            }

            if(sort_by === 'h-l'){
                const updatedProduct = allProducts1.sort((a,b) => {
                    return b.price - a.price
                })

                state.products = updatedProduct
            }

            if(sort_by === 'l-h'){
                const updatedProduct = allProducts1.sort((a,b) => {
                    return a.price - b.price
                })

                state.products = updatedProduct
            }

            if(sort_by === 'default'){
                state.products = allProducts1
            }

        },

        filterBudgetBazarProduct : (state , action) => {
            const price = action.payload
            const allProducts = [...current(state.totalProduct)]

            let filteredProduct = allProducts.filter((product) => product.price < price)

            state.products = filteredProduct

        }

    },


  

   
});




export const {getProduct ,filterByBrand , sortProduct , filterBudgetBazarProduct} = productSlice.actions;

export default productSlice.reducer