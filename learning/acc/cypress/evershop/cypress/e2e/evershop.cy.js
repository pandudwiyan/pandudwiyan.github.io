import {faker} from "@faker-js/faker"

// SignUp
describe('SignUp Feature', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.viewport('macbook-15')
    cy.fixture('data_register.json').as('data_register')
  })

  // Case 1 - Successful Signup
  it('Case 1 - Successful Signup', () => {
    
    cy.get('@data_register').each((data) => {

      // Deklarasi
      let email_acak = faker.internet.email()
      let full_name_acak = faker.name.firstName() + ' ' + faker.name.lastName()
      let password_acak = faker.internet.password();

      // Mengunjungi link Registrasi
      cy.visit('https://demo.evershop.io/account/register')

      // Mengisi Form
      cy.wait(1000)
      cy.get('input[name="full_name"]').type(full_name_acak)
      cy.get('input[name="email"]').type(email_acak)
      cy.get('input[name="password"]').type(password_acak)
      cy.get("button[type='button']").contains('SIGN UP').click();

      cy.wait(2500)

    })       

  })

  // Case 2 - Signup with existing email
  it('Case 2 - Signup with existing email', () => {
    
    cy.get('@data_register').each((data) => {

      // Deklarasi
      let full_name_acak = faker.name.firstName() + ' ' + faker.name.lastName()

      // Mengunjungi link Registrasi
      cy.visit('https://demo.evershop.io/account/register')

      // Mengisi Form
      cy.wait(1000)
      cy.get('input[name="full_name"]').type(full_name_acak)
      cy.get('input[name="email"]').type(data.email)
      cy.get('input[name="password"]').type(data.password)
      cy.get("button[type='button']").contains('SIGN UP').click()
      
      cy.wait(2500)

    })       

  })

})

// Login Feature
describe('Login Feature', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.viewport('macbook-15') 
    cy.fixture('data_register.json').as('data_login')
  })

  // Case 1 - Successful login
  it('Case 1 - Successful login', () => {
    
    cy.get('@data_login').each((data) => {
      
      cy.visit('https://demo.evershop.io/account/login')

      cy.wait(1000)
      cy.get('input[name="email"]').type(data.email)
      cy.get('input[name="password"]').type(data.password)

      cy.wait(1000)
      cy.get("button[type='submit']").contains('SIGN IN').click();


      cy.wait(2500)
      cy.get('a[href="/account"]').click();

      cy.wait(2500)

    })       

  })

  // Case 2 - Login with incorrect email and password
  it('Case 2 - Login with incorrect email and password', () => {
    
    cy.get('@data_login').each((data) => {
      
      cy.visit('https://demo.evershop.io/account/login')
      cy.get('input[name="email"]').type(data.email+'e')
      cy.get('input[name="password"]').type(data.password+'hehe')

      cy.wait(1000)
      cy.get("button[type='submit']").contains('SIGN IN').click();

      cy.wait(2500)

    })       

  })

})

// Shopping Feature Without Login
describe('Shopping Feature Without Login', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.viewport('macbook-15')  
    cy.fixture('data_shoping.json').as('data_shoping')
    cy.fixture('data_register.json').as('data_user')
  })
  
  function acak_angka(n) {
    return Math.floor(Math.random() * n) + 1;
  }

  // Case 1 - Customer chooses a product from a list
  it('Case 1 - Customer chooses a product from a list', () => {
    
    // Deklarasi
    let cat,prd = 0

    cy.visit('https://demo.evershop.io/')

    cy.get('@data_shoping').each((data) => {
      
      // Memilih Kategori
      cy.wait(1000)
      if ( data.category === 'random' ) { cat = acak_angka(3).toString() }
      else { cat = data.category }

          // Logic Category
          if ( cat === '1' ) 
          { 
            cy.contains('Kids').click()
            prd = acak_angka(11) 
          }
          else if ( cat === '2' ) 
          { 
            cy.contains('Women').click() 
            prd = acak_angka(14) 
          }
          else 
          { 
            cy.contains('Men').click()
            prd = acak_angka(18)  
          }

      // Memilih Produk
      cy.wait(1000)
      if ( data.product === 'random' ) 
      { 
        cy.get('.listing-tem').eq(prd-1).click();
      }
      else 
      {
        prd = data.product - 1 
        cy.get('.listing-tem').eq(prd).click();
      }

      cy.wait(2500)
    })       

  })

  // Case 2 - Adding multiple items to the shopping cart
  it('Case 2 - Adding multiple items to the shopping cart', () => {
    
    // Deklarasi
    let cat,prd,jml,n_size,n_warna = 0

    cy.visit('https://demo.evershop.io/')

    cy.get('@data_shoping').each((data) => {
      
      // Memilih Kategori
      cy.wait(1000)
      if ( data.category === 'random' ) { cat = acak_angka(3).toString() }
      else { cat = data.category }

          // Logic Category
          if ( cat === '1' ) 
          { 
            cy.contains('Kids').click()
            prd = acak_angka(11) 
          }
          else if ( cat === '2' ) 
          { 
            cy.contains('Women').click() 
            prd = acak_angka(14) 
          }
          else 
          { 
            cy.contains('Men').click()
            prd = acak_angka(18)  
          }

      // Memilih Produk
      cy.wait(1000)
      if ( data.product === 'random' ) 
      { 
        cy.get('.listing-tem').eq(prd-1).click();
      }
      else 
      {
        prd = data.product - 1 
        cy.get('.listing-tem').eq(prd).click();
      }

      // Mengisi Quantity
      cy.wait(1000)
      cy.get('input[name="qty"]').clear().type('1')

      // Memilih Size
      cy.wait(1000)
      if (data.size === 'random') 
      {
        cy.get('.variant-option-list').eq(0).find('li').its('length').then((pilihan_size) => 
        {
          n_size = acak_angka(pilihan_size)
          cy.get('.variant-option-list').eq(0).find('li').eq(n_size-1).click()
        });        
      }
      else
      {
        cy.get('.variant-option-list').eq(0).find('li').eq(data.size-1).click()
      }

      // Memilih Variant
      cy.wait(1000)
      if (data.variant === 'random') 
      {
        cy.get('.variant-option-list').eq(1).find('li').its('length').then((pilihan_warna) => 
        {
          n_warna = acak_angka(pilihan_warna)
          cy.get('.variant-option-list').eq(1).find('li').eq(n_warna-1).click()
        });        
      }
      else
      {
        cy.get('.variant-option-list').eq(1).find('li').eq(data.variant-1).click()
      }

      // Klik Add to Cart
      cy.wait(1000)
      cy.contains('ADD TO CART').click();

      // Klik Continue Shopping
      cy.wait(1000)
      cy.contains('Continue Shopping').click();

    })
    
    cy.wait(1000)
    cy.visit('https://demo.evershop.io/cart')

    cy.wait(2500)

  })

  // Case 3 - Updating the quantity of items in the shopping cart
  it('Case 3 - Updating the quantity of items in the shopping cart', () => {
    
    // Deklarasi
    let cat,prd,jml,n_size,n_warna = 0

    cy.visit('https://demo.evershop.io/')

    cy.get('@data_shoping').each((data) => {
      
      // Memilih Kategori
      cy.wait(1000)
      if ( data.category === 'random' ) { cat = acak_angka(3).toString() }
      else { cat = data.category }

          // Logic Category
          if ( cat === '1' ) 
          { 
            cy.contains('Kids').click()
            prd = acak_angka(11) 
          }
          else if ( cat === '2' ) 
          { 
            cy.contains('Women').click() 
            prd = acak_angka(14) 
          }
          else 
          { 
            cy.contains('Men').click()
            prd = acak_angka(18)  
          }

      // Memilih Produk
      cy.wait(1000)
      if ( data.product === 'random' ) 
      { 
        cy.get('.listing-tem').eq(prd-1).click();
      }
      else 
      {
        prd = data.product - 1 
        cy.get('.listing-tem').eq(prd).click();
      }

      // Mengisi Quantity
      cy.wait(1000)
      if (data.qty === 'random') 
      {
        jml = acak_angka(10)
        cy.get('input[name="qty"]').clear().type(jml);
      }
      else
      {
        cy.get('input[name="qty"]').clear().type(data.qty);
      }

      // Memilih Size
      cy.wait(1000)
      if (data.size === 'random') 
      {
        cy.get('.variant-option-list').eq(0).find('li').its('length').then((pilihan_size) => 
        {
          n_size = acak_angka(pilihan_size)
          cy.get('.variant-option-list').eq(0).find('li').eq(n_size-1).click()
        });        
      }
      else
      {
        cy.get('.variant-option-list').eq(0).find('li').eq(data.size-1).click()
      }

      // Memilih Variant
      cy.wait(1000)
      if (data.variant === 'random') 
      {
        cy.get('.variant-option-list').eq(1).find('li').its('length').then((pilihan_warna) => 
        {
          n_warna = acak_angka(pilihan_warna)
          cy.get('.variant-option-list').eq(1).find('li').eq(n_warna-1).click()
        });        
      }
      else
      {
        cy.get('.variant-option-list').eq(1).find('li').eq(data.variant-1).click()
      }

      // Klik Add to Cart
      cy.wait(1000)
      cy.contains('ADD TO CART').click();

      // Klik Continue Shopping
      cy.wait(1000)
      cy.contains('Continue Shopping').click();

    })
    
    cy.wait(1000)
    cy.visit('https://demo.evershop.io/cart')

    cy.wait(2500)

  })

  // Case 4 - Removing items from the shopping cart
  it('Case 4 - Removing items from the shopping cart', () => {
    
    // Deklarasi
    let cat,prd,jml,n_size,n_warna,n_remove = 0

    cy.visit('https://demo.evershop.io/')

    cy.get('@data_shoping').each((data) => {
      
      // Memilih Kategori
      cy.wait(1000)
      if ( data.category === 'random' ) { cat = acak_angka(3).toString() }
      else { cat = data.category }

          // Logic Category
          if ( cat === '1' ) 
          { 
            cy.contains('Kids').click()
            prd = acak_angka(11) 
          }
          else if ( cat === '2' ) 
          { 
            cy.contains('Women').click() 
            prd = acak_angka(14) 
          }
          else 
          { 
            cy.contains('Men').click()
            prd = acak_angka(18)  
          }

      // Memilih Produk
      cy.wait(1000)
      if ( data.product === 'random' ) 
      { 
        cy.get('.listing-tem').eq(prd-1).click();
      }
      else 
      {
        prd = data.product - 1 
        cy.get('.listing-tem').eq(prd).click();
      }

      // Mengisi Quantity
      cy.wait(1000)
      if (data.qty === 'random') 
      {
        jml = acak_angka(10)
        cy.get('input[name="qty"]').clear().type(jml);
      }
      else
      {
        cy.get('input[name="qty"]').clear().type(data.qty);
      }

      // Memilih Size
      cy.wait(1000)
      if (data.size === 'random') 
      {
        cy.get('.variant-option-list').eq(0).find('li').its('length').then((pilihan_size) => 
        {
          n_size = acak_angka(pilihan_size)
          cy.get('.variant-option-list').eq(0).find('li').eq(n_size-1).click()
        });        
      }
      else
      {
        cy.get('.variant-option-list').eq(0).find('li').eq(data.size-1).click()
      }

      // Memilih Variant
      cy.wait(1000)
      if (data.variant === 'random') 
      {
        cy.get('.variant-option-list').eq(1).find('li').its('length').then((pilihan_warna) => 
        {
          n_warna = acak_angka(pilihan_warna)
          cy.get('.variant-option-list').eq(1).find('li').eq(n_warna-1).click()
        });        
      }
      else
      {
        cy.get('.variant-option-list').eq(1).find('li').eq(data.variant-1).click()
      }

      // Klik Add to Cart
      cy.wait(1000)
      cy.contains('ADD TO CART').click();

      // Klik View Cart
      cy.wait(1000)
      cy.contains('Continue Shopping').click();

    })
    
    cy.wait(1000)
    cy.visit('https://demo.evershop.io/cart')
    
    // Remove Random Product
    cy.wait(1000)
    cy.get('.cart-tem-info').its('length').then((jumlah_div) => 
      {
        if (jumlah_div > 1) {
        
          n_remove = acak_angka(jumlah_div)
          cy.get('.cart-tem-info').eq(n_remove-1).contains('Remove').click()
        
        }
        else
        {
          cy.contains('Remove').click();
        }
      })
    
    cy.wait(2500)

  })

  // Case 5 - Proceeding to checkout with items in the shopping cart
  it('Case 5 - Proceeding to checkout with items in the shopping cart', () => {
    
   // Deklarasi
   let cat,prd,jml,n_size,n_warna = 0
   let email_acak = faker.internet.email()
   let no_tlp_acak = faker.phone.number('082-3##-###')
   let alamat_acak = faker.address.streetAddress() +" "+faker.address.city()
   let kode_pos_acak = faker.address.zipCode()
   let city_acak = faker.address.city()
   let full_name_acak = faker.name.firstName() + ' ' + faker.name.lastName()

    cy.visit('https://demo.evershop.io/')

    cy.get('@data_shoping').each((data) => {
      
    // Memilih Kategori
    cy.wait(1000)
    if ( data.category === 'random' ) { cat = acak_angka(3).toString() }
    else { cat = data.category }

        // Logic Category
        if ( cat === '1' ) 
        { 
          cy.contains('Kids').click()
          prd = acak_angka(11) 
        }
        else if ( cat === '2' ) 
        { 
          cy.contains('Women').click() 
          prd = acak_angka(14) 
        }
        else 
        { 
          cy.contains('Men').click()
          prd = acak_angka(18)  
        }

    // Memilih Produk
    cy.wait(1000)
    if ( data.product === 'random' ) 
    { 
      cy.get('.listing-tem').eq(prd-1).click();
    }
    else 
    {
      prd = data.product - 1 
      cy.get('.listing-tem').eq(prd).click();
    }

    // Mengisi Quantity
    cy.wait(1000)
    if (data.qty === 'random') 
    {
      jml = acak_angka(10)
      cy.get('input[name="qty"]').clear().type(jml);
    }
    else
    {
      cy.get('input[name="qty"]').clear().type(data.qty);
    }

    // Memilih Size
    cy.wait(1000)
    if (data.size === 'random') 
    {
      cy.get('.variant-option-list').eq(0).find('li').its('length').then((pilihan_size) => 
      {
        n_size = acak_angka(pilihan_size)
        cy.get('.variant-option-list').eq(0).find('li').eq(n_size-1).click()
      });        
    }
    else
    {
      cy.get('.variant-option-list').eq(0).find('li').eq(data.size-1).click()
    }

    // Memilih Variant
    cy.wait(1000)
    if (data.variant === 'random') 
    {
      cy.get('.variant-option-list').eq(1).find('li').its('length').then((pilihan_warna) => 
      {
        n_warna = acak_angka(pilihan_warna)
        cy.get('.variant-option-list').eq(1).find('li').eq(n_warna-1).click()
      });        
    }
    else
    {
      cy.get('.variant-option-list').eq(1).find('li').eq(data.variant-1).click()
    }

    // Klik Add to Cart
    cy.wait(1000)
    cy.contains('ADD TO CART').click();

    // Klik Continue Shopping
    cy.wait(1000)
    cy.contains('Continue Shopping').click();

    })
    
    // Buka Halaman Cart
    cy.wait(1000)
    cy.visit('https://demo.evershop.io/cart')

    cy.wait(1000)
    cy.contains('CHECKOUT').click()

    // Input Form
    cy.wait(1000)
    cy.get('@data_user').each((data2) => {

      cy.get('input[name="email"]').type(email_acak)
      cy.contains('Continue to shipping').click()

      cy.wait(1000)
      cy.get('input[name="address[full_name]"]').type(full_name_acak)
      cy.get('input[name="address[telephone]"]').type(no_tlp_acak)
      cy.get('input[name="address[address_1]"]').type(alamat_acak)
      cy.get('input[name="address[city]"]').type(city_acak)
      cy.get('select[name="address[country]"]').select(data2.country)
      cy.get('select[name="address[province]"]').select(data2.province)
      cy.get('input[name="address[postcode]"]').type(kode_pos_acak)
      cy.wait(2500)

      // Memilih Shipping Method
      cy.get('.field-wrapper.radio-field').eq(0).find('label').eq(data2.shipping_method - 1).click()
      
      cy.wait(1000)
      cy.contains('Continue to payment').click()
      
      // Memilih Payment Method
      cy.wait(2500)
      if (data2.payment_method === '1')
      {
        cy.get('.payment-method-list').eq(0).find('svg').eq(0).click()
      }
      else if (data2.payment_method === '2')
      {
        cy.get('.payment-method-list').eq(1).find('svg').eq(0).click()
      }
      else
      {
        cy.get('.payment-method-list').eq(2).find('svg').eq(0).click()
      }
      
      cy.wait(1000)
      cy.contains('Place Order').click()

      cy.wait(2500)

    })
    
  })

})

// Shopping Feature With Login
describe('Shopping Feature With Login', () => {

  beforeEach(() => { 
      cy.clearCookies()
      cy.clearLocalStorage()
      cy.viewport('macbook-15')  
      cy.fixture('data_shoping.json').as('data_shoping')
      cy.fixture('data_register.json').as('data_user')
  })

  function acak_angka(n) {
    return Math.floor(Math.random() * n) + 1;
  }

  // Case 1 - Add multiple items to the shopping cart with a logged-in user
  it('Case 1 - Add multiple items to the shopping cart with a logged-in user', () => {

    // Deklarasi
    let cat,prd,jml,n_size,n_warna,email_acak,n_remove = 0

    // Login
    cy.get('@data_user').each((data_login) => {
      
      cy.visit('https://demo.evershop.io/account/login')
      cy.get('input[name="email"]').type(data_login.email)
      cy.get('input[name="password"]').type(data_login.password)
      cy.get("button[type='submit']").contains('SIGN IN').click();
      
    })

    // Belanja
    cy.get('@data_shoping').each((data) => {
      
      // Memilih Kategori
      cy.wait(1000)
      if ( data.category === 'random' ) { cat = acak_angka(3).toString() }
      else { cat = data.category }

        // Logic Category
        if ( cat === '1' ) 
        { 
          cy.contains('Kids').click()
          prd = acak_angka(11) 
        }
        else if ( cat === '2' ) 
        { 
          cy.contains('Women').click() 
          prd = acak_angka(14) 
        }
        else 
        { 
          cy.contains('Men').click()
          prd = acak_angka(18)  
        }

      // Memilih Produk
      cy.wait(1000)
      if ( data.product === 'random' ) 
      { 
        cy.get('.listing-tem').eq(prd-1).click();
      }
      else 
      {
        prd = data.product - 1 
        cy.get('.listing-tem').eq(prd).click();
      }

      // Mengisi Quantity
      cy.wait(1000)
      if (data.qty === 'random') 
      {
        jml = acak_angka(10)
        cy.get('input[name="qty"]').clear().type(jml);
      }
      else
      {
        cy.get('input[name="qty"]').clear().type(data.qty);
      }

      // Memilih Size
      cy.wait(1000)
      if (data.size === 'random') 
      {
        cy.get('.variant-option-list').eq(0).find('li').its('length').then((pilihan_size) => 
        {
          n_size = acak_angka(pilihan_size)
          cy.get('.variant-option-list').eq(0).find('li').eq(n_size-1).click()
        });        
      }
      else
      {
        cy.get('.variant-option-list').eq(0).find('li').eq(data.size-1).click()
      }

      // Memilih Variant
      cy.wait(1000)
      if (data.variant === 'random') 
      {
        cy.get('.variant-option-list').eq(1).find('li').its('length').then((pilihan_warna) => 
        {
          n_warna = acak_angka(pilihan_warna)
          cy.get('.variant-option-list').eq(1).find('li').eq(n_warna-1).click()
        });        
      }
      else
      {
        cy.get('.variant-option-list').eq(1).find('li').eq(data.variant-1).click()
      }

      // Klik Add to Cart
      cy.wait(1000)
      cy.contains('ADD TO CART').click();

      // Klik View Cart
      cy.wait(1000)
      cy.contains('Continue Shopping').click();

    })

    cy.wait(1500)

    // Logout
    cy.wait(1000)
    cy.get('.icon-wrapper').eq(0).find('div').eq(1).click()
    cy.contains('Logout').click();

    cy.wait(1500)

    // Login
    cy.wait(1000)
    cy.get('@data_user').each((data_login) => {
      
      cy.visit('https://demo.evershop.io/account/login')
      cy.get('input[name="email"]').type(data_login.email)
      cy.get('input[name="password"]').type(data_login.password)
      cy.get("button[type='submit']").contains('SIGN IN').click();
      cy.wait(2500);

    })

    // Remove Salah Satu
    cy.wait(1000)
    cy.visit('https://demo.evershop.io/cart')
    cy.get('.cart-tem-info').its('length').then((jumlah_div) => 
      {
        if (jumlah_div > 1) {
        
          n_remove = acak_angka(jumlah_div)
          cy.get('.cart-tem-info').eq(n_remove-1).contains('Remove').click()
        
        }
        else
        {
          cy.contains('Remove').click();
        }
      })
    
    cy.wait(1500)
    
    // Checkout
    cy.wait(1000)
    cy.contains('CHECKOUT').click()

    cy.wait(1500)

    // Finishing
    cy.get('@data_user').each((data2) => {

      cy.get('input[name="address[full_name]"]').type(data2.firstName + " " + data2.lastName)
      cy.get('input[name="address[telephone]"]').type(data2.telephone)
      cy.get('input[name="address[address_1]"]').type(data2.address)
      cy.get('input[name="address[city]"]').type(data2.city)
      cy.get('select[name="address[country]"]').select(data2.country)
      cy.get('select[name="address[province]"]').select(data2.province)
      cy.get('input[name="address[postcode]"]').type(data2.postcode)
      cy.wait(1500)

      // Memilih Shipping Method
      cy.get('.field-wrapper.radio-field').eq(0).find('label').eq(data2.shipping_method - 1).click()
      
      cy.wait(1000)
      cy.contains('Continue to payment').click()
      
      // Memilih Payment Method
      cy.wait(2500)
      if (data2.payment_method === '1')
      {
        cy.get('.payment-method-list').eq(0).find('svg').eq(0).click()
      }
      else if (data2.payment_method === '2')
      {
        cy.get('.payment-method-list').eq(1).find('svg').eq(0).click()
      }
      else
      {
        cy.get('.payment-method-list').eq(2).find('svg').eq(0).click()
      }
      
      cy.wait(1000)
      cy.contains('Place Order').click()

    })

    cy.wait(2500)

  })

})

// npx cypress run --record --key f8eec0b9-9e5e-489c-b09a-d7ebd970a692