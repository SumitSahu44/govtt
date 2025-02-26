import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight, Users, Phone, MessageSquare } from 'lucide-react';
import ppl1Image from "../../assets/ppl1.jpeg"; // Importing the image

export function EmpoweringLabourForm () {
  const [formState, setFormState] = useState({
    manpower: '',
    contact: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    }
  };

  const submitButtonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.2,
        yoyo: Infinity
      }
    },
    tap: { scale: 0.95 },
    success: {
      backgroundColor: "#22c55e",
      transition: { duration: 0.3 }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const InputField = ({ icon: Icon, label, type = "text", value, onChange, placeholder }) => (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      className="relative"
    >
      <div className="absolute left-4 top-4 text-orange-600">
        <Icon size={24} />
      </div>
      {type === 'textarea' ? (
        <textarea
          className="w-full pl-14 pr-4 py-4 bg-white rounded-xl border-2 border-orange-100 
                   focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all
                   text-gray-700 placeholder-gray-400"
          placeholder={placeholder}
          rows="4"
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          className="w-full pl-14 pr-4 py-4 bg-white rounded-xl border-2 border-orange-100 
                   focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all
                   text-gray-700 placeholder-gray-400"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      <motion.label 
        className="absolute -top-6 left-0 text-sm font-medium text-gray-600"
        variants={floatVariants}
      >
        {label}
      </motion.label>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-16"
      >
        <motion.div 
          className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Form Section */}
            <div className="p-8 lg:p-12">
              <motion.div className="space-y-8">
                <motion.div variants={itemVariants} className="space-y-2">
                  <motion.h2 
                    className="text-4xl lg:text-5xl font-bold text-gray-800"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Empowering Labour
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-600"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Through Cooperative Efforts
                  </motion.p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <InputField
                    icon={Users}
                    label="Skilled Manpower Services"
                    type="textarea"
                    value={formState.manpower}
                    onChange={(e) => setFormState({ ...formState, manpower: e.target.value })}
                    placeholder="Describe your services..."
                  />

                  <InputField
                    icon={MessageSquare}
                    label="Contact Information"
                    value={formState.contact}
                    onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                    placeholder="Your contact details"
                  />

                  <InputField
                    icon={Phone}
                    label="Phone Number"
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                  />

                  <InputField
                    icon={MessageSquare}
                    label="Message"
                    type="textarea"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell us about your inquiry..."
                  />

                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      variants={submitButtonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className={`w-full py-4 px-8 rounded-xl text-white font-semibold text-lg
                                flex items-center justify-center gap-2 shadow-lg
                                ${submitted ? 'bg-green-500' : 'bg-orange-500 hover:bg-orange-600'}`}
                    >
                      {submitted ? (
                        <>
                          <CheckCircle2 className="w-6 h-6" />
                          <span>Successfully Submitted</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div 
              className="relative h-full min-h-[400px] lg:min-h-full hidden lg:block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-orange-800/90 mix-blend-multiply" />
              <img
                src={ppl1Image}
                alt="Skilled Workers"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};