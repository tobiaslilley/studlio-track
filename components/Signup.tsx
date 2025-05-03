import React, { useState } from 'react'
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native'
import { supabase } from '../lib/supabase'

export default function Signup({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignup = async () => {
    setError('')
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setError(error.message)
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 }} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 }} />
      {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}
      <Button title="Sign Up" onPress={handleSignup} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'blue', marginTop: 20, textAlign: 'center' }}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  )
} 