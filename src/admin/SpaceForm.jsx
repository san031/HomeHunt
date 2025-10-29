import React,{useCallback,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import appwriteService from '../appwrite/config'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import '../App.css'
function SpaceForm({space}) {
  const {register, handleSubmit,watch,
    setValue,control, getValues} = useForm({
      defaultValues:{
        title:space?.title||'',
        city:space?.city||'',
         location:space?.location||'',
         description:space?.description||'',
          status:space?.status||'active',
        slug:space?.slug||'',   
        bedroom:space?.bedroom||0,
        bathroom:space?.bathroom||0,
        price:space?.price||0,
        contactNo:space?.contactNo||'',
        disabledAccess : space?.disabledAccess||false,
        parking:space?.parking||false,
        elevator:space?.elevator||false,
        washingMachine:space?.washingMachine||false,
        dishwasher:space?.dishwasher||false,
        dateAvailable:space?.dateAvailable||'',
        
      }
    }) 
    const navigate = useNavigate()
      const userData = useSelector((state) => state.auth.userData)

      const submit = async(data) =>{
        console.log(data, space);
        if(space){
          const file= data.image[0]?appwriteService.uplaodFile(data.image[0]):null
          if(file){
            appwriteService.deleteFile(space.gallery)
          }

          const dbSpace=await appwriteService.updatePost(
            space.$id,{
              ...data,
              gallery:file?file.$id:undefined,
            }
          )
          if(dbSpace)
                navigate(`/space/${dbSpace.$id}`)
        }

        else{
          const file = await appwriteService.uplaodFile(data.image[0])

          if(file){
            const fileId=file.$id
            data.gallery = fileId
            console.log(userData);
            const dbSpace=await appwriteService.createPost({
              ...data,
              userId:userData.$id,
            })

            if(dbSpace){
              navigate(`/space/${dbSpace.$id}`)
            }
          }
        }

      }

      const slugTransform = useCallback((value) => {
        if(value && typeof value ==='string'){
          return value.trim().toLowerCase()
          .replace(/^[a-zA-Z/d/s]+/g,'-')
          .replace(/\s/g,'-')
        }
        return ''
      },[])

      useEffect(() => {


        const subscription = watch((value,{name}) => {
          if( name==='title'){
            setValue('slug',slugTransform(value.title,
              {shouldValidate:true}
            ))
          }
        })
      
        return () => {
          subscription.unsubscribe()
        }
      }, [watch,slugTransform,setValue])
      


      //useEffect me method ko optimize krne k liye usko variable me store krk
      // aur baad me optimize krne k liye usko unsubscribe kr dete h
  return (
    <div className='glass w-125 sticky '>
      <h1 className='text-3xl font-bold text-center'>Earn more from your property, do less</h1>
      <p className='text-center'>Find out if your property meets our criteria</p>
          <form
           onSubmit={handleSubmit(submit)}
          // onSubmit={(data) =>console.log(data)}
           >
            <div>
            <div>
              <Input
              placeholder= "Title"
              className="mb-4  w-110 rounded-lg h-9 bg-gray-200"
              {...register("title",{required:true})}/>

              <Input 
              placeholder="Description"
              type='textarea'
              className="mb-4 w-110 rounded-lg h-9 bg-gray-200"
              {...register("description",{required:true})}/>

              <Select 
              label={"Select city"}
              options={['Jaipur', 'Jodhpur','Ranchi','Ahemadabad']}
              {...register('city',{required:true})}  
              />

              <Input 
              placeholder="Location"
              className="mb-4  w-110 rounded-lg h-9 bg-gray-200"
              {...register("location",{required:true})}/>

              <Input type='checkbox' label='status' {...register("status")}/>

{/*               
              <Select 
              className="mb-4"
              {...register("city")}
              >
              <option value="">Select...</option>
              <option value="jaipur">jaipur</option>
              <option value="udaipur">Udaipur</option>
              </Select> */}

              
               <Input type='number'
               min="1" max="3"
               placeholder="Number of bedrooms" {
                ...register("bedroom",{required:true})
               }/>

               <Input type='number'
               min="1" max="3"
               placeholder="Number of bathrooms" {
                ...register("bathroom",{required:true})
               }/>

               <Input type='number'
               placeholder="Price" {
                ...register("price",{required:true})
               }/>

               <Input placeholder='Enter contact number' 
               {
                ...register("contactNo", {required:true})
               }
               className="mb-4 w-110 rounded-lg h-9 bg-gray-200"/>

               
            <Input type='checkbox' label='disabled access'
            {...register("disabledAccess")}
            />
            <Input type='checkbox' label='parking'
            {...register("parking")}
            />
            <Input type='checkbox' label='elevator'{...register("elevator")}/>
            <Input type='checkbox' label='dishwasher'
            {...register("dishwaher")}
            />
            <Input type='checkbox' label='washing machine'
            {...register('washingMachine')}
            />
            <Input height='h-7x' className='flex' margin='-2.5' width='w-3xs' type='date' {...register('dateAvailable')}/>
               <Input
               placeholder="Slug"
               className="mb-4 w-110 rounded-lg h-9 bg-gray-200"
               {...register("slug",
                {required:true}
               )}
               onInput ={(e) => {setValue("slug", slugTransform(e.currentTarget.value),
                {shouldValidate:true}
              )}}/>
            </div>
            <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required:true})}
                />
                
            <Button type="submit" className="w-full">
                                        {space?"Update Space":"Create Space"}
                                    </Button>
            </div>
          </form>
    </div>
  )
}

export default SpaceForm