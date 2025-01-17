import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const config = useRuntimeConfig()

  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  )

  const fetchValues = async () => {
    const { data, error } = await supabase
      .from('core_values')
      .select('*')
      .order('order')

    if (error) throw error
    return data
  }

  const fetchTeamMembers = async () => {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('active', true)
      .order('order')

    if (error) throw error
    return data
  }

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')

    if (error) throw error
    return data
  }

  const fetchFeaturedProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('featured', true)

    if (error) throw error
    return data
  }

  const fetchFaqs = async () => {
    const { data, error } = await supabase
      .from('faqs')
      .select('*')
      .order('order')

    if (error) throw error
    return data
  }

  const fetchSocialLinks = async () => {
    const { data, error } = await supabase
      .from('social_links')
      .select('*')

    if (error) throw error
    return data
  }

  const fetchContactInfo = async () => {
    const { data, error } = await supabase
      .from('contact_info')
      .select('*')

    if (error) throw error
    return data
  }

  const submitApplication = async (application: any) => {
    const { data, error } = await supabase
      .from('applications')
      .insert([application])

    if (error) throw error
    return data
  }

  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  }

  const updateApplicationStatus = async (id: any, status: any) => {
    const { data, error } = await supabase
      .from('applications')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  }

  return {
    fetchValues,
    fetchTeamMembers,
    fetchProjects,
    fetchFeaturedProjects,
    fetchFaqs,
    fetchSocialLinks,
    fetchContactInfo,
    submitApplication,
    fetchApplications,
    updateApplicationStatus
  }
}