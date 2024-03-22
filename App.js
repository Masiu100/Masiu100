import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const studentData = {
  name: 'Teboho Masiu',
  profilePicture: require('./john.jpg'), 
  semester: 'Jan-June 2024',
  subjects: [
    { name: 'Mobile Device Programming', grade: 'A' },
    { name: 'Java Programming', grade: 'B+' },
    { name: 'C++ Programming II', grade: 'B' },
  ],
};

const ProfileScreen = () => (
  <ScrollView style={{ padding: 20 }}>
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <Image source={studentData.profilePicture} style={{ width: 100, height: 100, borderRadius: 50 }} />
    </View>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{studentData.name}</Text>
    <Text>Current Semester: {studentData.semester}</Text>
    <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>Subjects:</Text>
    {studentData.subjects.map((subject, index) => (
      <View key={index} style={{ marginBottom: 10 }}>
        <Text>{subject.name}: {subject.grade}</Text>
      </View>
    ))}
  </ScrollView>
);

export default ProfileScreen;
