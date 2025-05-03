import React, { useState } from 'react'
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native'
import { supabase } from '../lib/supabase'

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
  }

  const handleGoogleLogin = async () => {
    setError('')
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' })
    if (error) setError(error.message)
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 }} />
      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
      <View style={{ height: 10 }} />
      <Button title="Login with Google" onPress={handleGoogleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{ color: 'blue', marginTop: 20, textAlign: 'center' }}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  )
} 